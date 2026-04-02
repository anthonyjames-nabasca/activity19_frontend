import api from "./axios";

export const registerUser = async (payload) => {
  const res = await api.post("/api/register", payload);
  return res.data;
};

export const loginUser = async (payload) => {
  const res = await api.post("/api/login", payload);
  return res.data;
};

export const logoutUser = async () => {
  const res = await api.post("/api/logout");
  return res.data;
};

export const forgotPassword = async (payload) => {
  const res = await api.post("/api/forgot-password", payload);
  return res.data;
};

export const resetPassword = async (payload) => {
  const res = await api.post("/api/reset-password", payload);
  return res.data;
};