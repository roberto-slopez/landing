export const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.example.com';

export const API_ENDPOINTS = {
  WORKSHOPS: {
    BOOK: `${API_BASE_URL}/workshops/book`
  }
};

// Exportando para el frontend
export const NOTION_CONFIG = {
  DATABASE_ID: import.meta.env.VITE_NOTION_DATABASE_ID,
  TOKEN: import.meta.env.VITE_NOTION_TOKEN,
  API_URL: 'https://api.notion.com/v1/pages'
};
