const express = require('express');
const axios = require('axios');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const { check, validationResult } = require('express-validator');
const { createLogger, format, transports } = require('winston');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Configuración de seguridad
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100 // Límite de 100 peticiones por IP
});
app.use(limiter);

// Logging
const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' })
  ]
});

// CORS más restrictivo
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || 
        origin === 'https://roberto-slopez.github.io' || 
        origin === 'https://www.tscompany.org') {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));

app.use(express.json({ limit: '50kb' })); // Límite en el tamaño de la petición

const NOTION_CONFIG = {
  DATABASE_ID: process.env.NOTION_DATABASE_ID,
  TOKEN: process.env.NOTION_TOKEN,
  API_URL: 'https://api.notion.com/v1/pages'
};

// Validaciones
const validateWorkshop = [
  check('type').isIn(['windsurf', 'cursor']).withMessage('Invalid workshop type'),
  check('teamName').isLength({ min: 2 }).withMessage('Team name is required'),
  check('email').isEmail().withMessage('Invalid email address'),
  check('date').isISO8601().withMessage('Invalid date format'),
  check('teamSize').isInt({ min: 1, max: 10 }).withMessage('Team size must be between 1 and 10'),
  check('additionalInfo').optional().isLength({ max: 1000 }).withMessage('Additional info is too long')
];

app.post('/workshops/book', validateWorkshop, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      logger.error('Validation error:', { errors: errors.array(), body: req.body });
      return res.status(400).json({ errors: errors.array() });
    }

    const { type, teamName, email, date, teamSize, additionalInfo } = req.body;

    // Validar fecha futura
    const bookingDate = new Date(date);
    const now = new Date();
    if (bookingDate <= now) {
      logger.error('Invalid booking date:', { date });
      return res.status(400).json({ error: 'Booking date must be in the future' });
    }

    const notionData = {
      parent: { database_id: NOTION_CONFIG.DATABASE_ID },
      properties: {
        Name: { title: [{ text: { content: type === 'windsurf' ? 'Windsurf Workshop' : 'Cursor Workshop' } }] },
        type: { rich_text: [{ text: { content: type }}] },
        teamName: { rich_text: [{ text: { content: teamName }}] },
        email: { email: email },
        date: { date: { start: date } },
        teamSize: { number: teamSize },
        additionalInfo: { rich_text: [{ text: { content: additionalInfo }}] }
      }
    };

    const response = await axios.post(NOTION_CONFIG.API_URL, notionData, {
      headers: {
        'Authorization': `Bearer ${NOTION_CONFIG.TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json'
      }
    });

    logger.info('Workshop booked successfully', { id: response.data.id });
    res.status(201).json(response.data);
  } catch (error) {
    logger.error('Error booking workshop:', { error: error.message, stack: error.stack });
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Middleware de error
app.use((err, req, res, next) => {
  logger.error('Unhandled error:', { error: err.message, stack: err.stack });
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
