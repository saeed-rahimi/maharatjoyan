const API_BASE_URL = "http://localhost:5000/api";

export const API_ENDPOINTS = {
  // Auth endpoints
  REGISTER: `${API_BASE_URL}/auth/register`,
  LOGIN: `${API_BASE_URL}/auth/login`,
  LOGOUT: `${API_BASE_URL}/auth/logout`,
  VERIFY_TOKEN: `${API_BASE_URL}/auth/verify-token`,

  // User endpoints
  GET_USER_PROFILE: `${API_BASE_URL}/users/profile`,
  UPDATE_USER_PROFILE: `${API_BASE_URL}/users/profile`,

  // Service endpoints
  GET_SERVICES: `${API_BASE_URL}/services`,
  CREATE_SERVICE: `${API_BASE_URL}/services`,
  UPDATE_SERVICE: (id) => `${API_BASE_URL}/services/${id}`,
  DELETE_SERVICE: (id) => `${API_BASE_URL}/services/${id}`,

  // Chat endpoints
  GET_CHATS: `${API_BASE_URL}/chats`,
  GET_CHAT_MESSAGES: (chatId) => `${API_BASE_URL}/chats/${chatId}/messages`,
  SEND_MESSAGE: (chatId) => `${API_BASE_URL}/chats/${chatId}/messages`,
};

export const SOCKET_URL = "http://localhost:5000";
