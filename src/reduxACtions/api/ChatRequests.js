import axios from 'axios'
import dotenv from 'dotenv';

dotenv.config();

// const API = axios.create({ baseURL: process.env.BASE_URL2 });

const API = axios.create({ baseURL: process.env.BASE_URL });

export const createChat = (data) => API.post('/chat/', data);

export const userChats = (id) => API.get(`/chat/${id}`);

export const findChat = (firstId, secondId) => API.get(`/chat/find/${firstId}/${secondId}`);