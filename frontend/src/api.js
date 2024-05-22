import axios from 'axios';

const API_URL = '/api/notifications';

export const sendNotification = async (category, message) => {
  const response = await axios.post(`${API_URL}/send`, { category, message });
  return response.data;
};

export const getLogs = async () => {
  const response = await axios.get(`${API_URL}/logs`);
  return response.data;
};