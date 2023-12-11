import axios from 'axios'


// const API = axios.create({ baseURL: 'https://us-central1-apptesting-3dac2.cloudfunctions.net/api' });

const API = axios.create({ baseURL: 'https://us-central1-delviewsx.cloudfunctions.net/api' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const createPost = (data) => API.post('/posts', data);
export const getAllPosts = () => API.get('/posts');
export const getPost = (id) => API.get(`/posts/${id}`);
export const getTimelinePosts = (id) => API.get(`/posts/${id}/timeline`);
export const likePost = (id, userId) => API.put(`posts/${id}/like`, { userId: userId })
export const deletePost = (id, userId) => API.delete(`/posts/${id}`, { userId: userId })