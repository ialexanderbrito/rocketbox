import axios from 'axios';

const api = axios.create({
  baseURL: 'http://rocketbox-oficial-backend.herokuapp.com',
});

export default api;
