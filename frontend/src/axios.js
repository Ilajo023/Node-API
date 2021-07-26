import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sf9579qq3c.execute-api.us-east-2.amazonaws.com/dev',
});

export default api;
