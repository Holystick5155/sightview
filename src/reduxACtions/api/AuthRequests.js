import axios from 'axios';


// const API = axios.create({ baseURL: 'https://us-central1-apptesting-3dac2.cloudfunctions.net/api' });

const API = axios.create({ baseURL: 'https://us-central1-delviewsx.cloudfunctions.net/api' });

export const logIn = (formData) => API.post('/auth/login', formData);

export const signUp = (formData) => API.post('/auth/register', formData);
