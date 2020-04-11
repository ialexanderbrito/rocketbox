import axios from 'axios';

const api = axios.create({
  baseURL: 'http://rocketbox-oficial.herokuapp.com',
});

export default api;
