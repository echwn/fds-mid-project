import axios from 'axios';

const dashAPI = axios.create({
  baseURL: process.env.API_URL
});