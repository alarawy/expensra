import api from "./axios";

export const getAllCategories = async ()=> {
    const request = await api.get("/api/categories");
    return request.data
}