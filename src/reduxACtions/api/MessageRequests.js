import axios from 'axios'
import dotenv from 'dotenv';

dotenv.config();

// const API = axios.create({ baseURL: process.env.BASE_URL2 });

const API = axios.create({ baseURL: process.env.BASE_URL });

export const getMessages = (id) => API.get(`/message/${id}`);

export const addMessage = (data) => API.post('/message/', data);