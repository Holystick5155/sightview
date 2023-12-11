import axios from 'axios'


// const API = axios.create({ baseURL: 'https://us-central1-apptesting-3dac2.cloudfunctions.net/api' });

const API = axios.create({ baseURL: 'https://us-central1-delviewsx.cloudfunctions.net/api' });

export const createChat = (data) => API.post('/chat/', data);

export const userChats = (id) => API.get(`/chat/${id}`);

export const findChat = (firstId, secondId) => API.get(`/chat/find/${firstId}/${secondId}`);