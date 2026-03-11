import api from "./axios";

export const getUserProfile = async () => {
    const response = await api.get("/user/profile");
    return response.data;
};


export const sendResetLink = async (data) => {
    const response = await api.put("/user/forgot-password", data);
    return response.data;
};

export const updateUserProfile = async (data) => {
    const response = await api.put("/user/profile", data);
    return response.data;
};


export const changeUserPassword = async (data) => {
    const response = await api.put("/user/change-password", data);
    return response.data;
};