import axios from 'axios';

const port = process.env.REACT_APP_BACKEND_PORT || '3001';
const baseURL = process.env.REACT_APP_BACKEND_BASE_URL || 'http://localhost';

const api = axios.create({
  baseURL: `${baseURL}:${port}`,
});

export const requestData = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};