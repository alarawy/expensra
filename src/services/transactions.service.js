import api from './axios';

export const getAllTransactions = async () => {
    const request = await api.get("/api/transactions");
    return request.data
}

export const GetTransaction = async (id) => {
    const request = await api.get(`/api/transactions/${id}`);
    return request.data
}

export const addTransaction = async (data) => {
    const request = await api.post("api/transactions", data)
    return request.data
}

export const editTransaction = async ({id, data}) => {
    const request = await api.put(`/api/transactions/${id}`, data)
    return request.data
}

export const deleteTransaction = async (id) => {
    const request = await api.delete(`/api/transactions/${id}`)
    return request.data
}