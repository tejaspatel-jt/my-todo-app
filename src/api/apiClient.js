// src/api/apiClient.js
import axios from 'axios';

// const API_URL = 'https://api.example.com/todos'; // Replace with your actual API URL
const API_URL = 'http://localhost:3500'; // Replace with your actual API URL

// Create an Axios instance
const api = axios.create({
    baseURL: API_URL,
});

// API calls
export const fetchTodos = () => api.get('/todos');
export const createTodo = (todo) => api.post('/todos', todo);
export const updateTodo = (id, todo) => api.patch(`/todos/${id}`, todo);
export const updateTodo_Fully = (todo) => api.put(`/todos/${todo.id}`, todo);
export const deleteTodo = (id) => api.delete(`/todos/${id}`);