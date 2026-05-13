import api from "./axios";

export const loginUser = async (data) => {
    const response = await api.post("/api/login", data);
    return response.data;
};

export const signupUser = async (data) => {
    const response = await api.post("/api/register", data);
    return response.data;
};

export const verifyUser = async (data) => {
    const response = await api.post("/api/verify-otp", data);
    return response.data;
};

export const logoutUser = async () => {
    const response = await api.post("/api/logout");
    return response.data;
};

export const getCurrentUser = async () => {
    const response = await api.get("/api/user");
    return response.data;
};