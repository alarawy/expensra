import api from "./axios";

export const requestOTP = async (data) => {
    const response = await api.post("/api/forgot-password", data);
    return response.data;
};

export const updateUserProfile = async (data) => {
    const response = await api.put("/api/user", data);
    return response.data;
};


export const resetUserPassword = async (data) => {
    const response = await api.post("/api/reset-password", data);
    return response.data;
};

export const changeUserPassword = async (data) => {
    const response = await api.post("/api/change-password", data);
    return response.data;
};