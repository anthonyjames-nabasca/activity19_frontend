import api from "./axios";

export const getProfile = async () => {
  const res = await api.get("/api/profile");
  return res.data;
};

export const updateProfile = async (formData) => {
  const res = await api.put("/api/profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};