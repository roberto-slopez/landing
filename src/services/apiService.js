import axios from 'axios';
import { NOTION_CONFIG } from '../config/api';

const apiService = {
  bookWorkshop: async (data) => {
    try {
      const notionData = {
        parent: { database_id: NOTION_CONFIG.DATABASE_ID },
        properties: {
          Name: { title: [{ text: { content: data.type === 'windsurf' ? 'Windsurf Workshop' : 'Cursor Workshop' } }] },
          type: { rich_text: [{ text: { content: data.type }}] },
          teamName: { rich_text: [{ text: { content: data.teamName }}] },
          email: { email: data.email },
          date: { date: { start: data.date } },
          teamSize: { number: data.teamSize },
          additionalInfo: { rich_text: [{ text: { content: data.additionalInfo }}] }
        }
      };

      const response = await axios.post(NOTION_CONFIG.API_URL, notionData, {
        headers: {
          'Authorization': `Bearer ${NOTION_CONFIG.TOKEN}`,
          'Notion-Version': '2022-06-28',
          'Content-Type': 'application/json'
        }
      });

      return response.data;
    } catch (error) {
      console.error('Error booking workshop:', error);
      throw error;
    }
  },
};

export default apiService;
