import { apiClient, clearToken } from "./config";

export const apiSignUp = async (payload) => {
  return apiClient.post("/auth/register", payload);
};

export const apiLogin = async (payload) => {
  return apiClient.post("/auth/login", payload);
};

export const apiLogout = async () => {
  clearToken();
};

export const apiCheckUsernameExists = async (userName) => {
  return apiClient.get(`/auth/${userName}`);
};