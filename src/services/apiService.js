import axios from 'axios';
import { API_ENDPOINTS } from '../config/api';

// Crear una instancia de axios con la configuración predeterminada
const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false // Importante para CORS
});

// Interceptor para mostrar información de depuración
api.interceptors.request.use(request => {
  console.log('API Request:', request.url);
  return request;
});

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error('API Error:', error.message, error.response?.data);
    return Promise.reject(error);
  }
);

const apiService = {
  bookWorkshop: async (data) => {
    try {
      console.log('Sending workshop booking to:', API_ENDPOINTS.WORKSHOPS.BOOK);
      console.log('With data:', data);
      
      const response = await api.post(API_ENDPOINTS.WORKSHOPS.BOOK, data);
      
      console.log('Workshop booking response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error booking workshop:', error);
      throw error;
    }
  },
};

export default apiService;
