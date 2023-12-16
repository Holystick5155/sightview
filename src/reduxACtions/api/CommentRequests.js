// commentApi.js
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

// const BASE_URL = 'http://localhost:5044';
// const api = axios.create({
//     baseURL: BASE_URL,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

// const API = axios.create({ baseURL: process.env.BASE_URL2 });

const API = axios.create({ baseURL: process.env.BASE_URL });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

export const createComment = (comment) => API.post("/posts/comments", comment);
export const createReply = (reply) => API.post(`/posts/comments/${reply.commentId}`, reply);
// export const createReply = (commentId, reply) => api.post(`comments/${commentId}/replies`, reply);

export const getComments = (postId) => API.get(`/posts/${postId}/comments`);
export const getReplies = (commentId) => API.get(`/comments/${commentId}`);
//export const getComments = () => api.get('/comments');


export const deleteComment = (commentId) => API.delete(`/comments/${commentId}`);


export const updateComment = (commentId, content) => API.patch(`/comments/${commentId}`, { content });
