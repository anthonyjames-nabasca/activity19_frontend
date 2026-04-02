import api from "./axios";

export const getAccounts = async () => {
  const res = await api.get("/api/account");
  return res.data;
};

export const getAccountById = async (id) => {
  const res = await api.get(`/api/account/${id}`);
  return res.data;
};

export const createAccount = async (formData) => {
  const res = await api.post("/api/account", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export const updateAccount = async (id, formData) => {
  const res = await api.put(`/api/account/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export const deleteAccount = async (id) => {
  const res = await api.delete(`/api/account/${id}`);
  return res.data;
};