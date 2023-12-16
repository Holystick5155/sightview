import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

// const API = axios.create({ baseURL: process.env.BASE_URL2 });

const API = axios.create({ baseURL: process.env.BASE_URL });

export const logIn = (formData) => API.post('/auth/login', formData);

export const signUp = (formData) => API.post('/auth/register', formData);
