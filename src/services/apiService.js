import axios from 'axios';
import { API_ENDPOINTS } from '../config/api';

const apiService = {
  bookWorkshop: async (data) => {
    try {
      const response = await axios.post(API_ENDPOINTS.WORKSHOPS.BOOK, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (error) {
      console.error('Error booking workshop:', error);
      throw error;
    }
  },
};

export default apiService;
