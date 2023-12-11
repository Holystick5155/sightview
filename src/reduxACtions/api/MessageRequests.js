import axios from 'axios'


// const API = axios.create({ baseURL: 'https://us-central1-apptesting-3dac2.cloudfunctions.net/api' });

const API = axios.create({ baseURL: 'https://us-central1-delviewsx.cloudfunctions.net/api' });

export const getMessages = (id) => API.get(`/message/${id}`);

export const addMessage = (data) => API.post('/message/', data);