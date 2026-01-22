import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Items API
export const itemsApi = {
  getAll: async () => {
    const response = await api.get('/items/');
    return response.data;
  },
  
  getById: async (id) => {
    const response = await api.get(`/items/${id}`);
    return response.data;
  },
  
  create: async (item) => {
    const response = await api.post('/items/', item);
    return response.data;
  },
  
  update: async (id, item) => {
    const response = await api.put(`/items/${id}`, item);
    return response.data;
  },
  
  delete: async (id) => {
    await api.delete(`/items/${id}`);
  },
};

// Users API
export const usersApi = {
  getAll: async () => {
    const response = await api.get('/users/');
    return response.data;
  },
  
  getById: async (id) => {
    const response = await api.get(`/users/${id}`);
    return response.data;
  },
  
  create: async (user) => {
    const response = await api.post('/users/', user);
    return response.data;
  },
  
  delete: async (id) => {
    await api.delete(`/users/${id}`);
  },
};

// Health check
export const healthCheck = async () => {
  const response = await api.get('/health');
  return response.data;
};

export default api;
