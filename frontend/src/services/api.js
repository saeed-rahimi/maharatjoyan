import axios from "axios";
import { API_ENDPOINTS } from "../config/api";

// Create axios instance with default config
const api = axios.create({
  baseURL: API_ENDPOINTS.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth services
export const authService = {
  register: (userData) => api.post(API_ENDPOINTS.REGISTER, userData),
  login: (credentials) => api.post(API_ENDPOINTS.LOGIN, credentials),
  logout: () => api.post(API_ENDPOINTS.LOGOUT),
  verifyToken: () => api.get(API_ENDPOINTS.VERIFY_TOKEN),
};

// User services
export const userService = {
  getProfile: () => api.get(API_ENDPOINTS.GET_USER_PROFILE),
  updateProfile: (profileData) =>
    api.put(API_ENDPOINTS.UPDATE_USER_PROFILE, profileData),
};

// Service services
export const serviceService = {
  getAll: () => api.get(API_ENDPOINTS.GET_SERVICES),
  create: (serviceData) => api.post(API_ENDPOINTS.CREATE_SERVICE, serviceData),
  update: (id, serviceData) =>
    api.put(API_ENDPOINTS.UPDATE_SERVICE(id), serviceData),
  delete: (id) => api.delete(API_ENDPOINTS.DELETE_SERVICE(id)),
};

// Chat services
export const chatService = {
  getAll: () => api.get(API_ENDPOINTS.GET_CHATS),
  getMessages: (chatId) => api.get(API_ENDPOINTS.GET_CHAT_MESSAGES(chatId)),
  sendMessage: (chatId, message) =>
    api.post(API_ENDPOINTS.SEND_MESSAGE(chatId), message),
};

export default api;
