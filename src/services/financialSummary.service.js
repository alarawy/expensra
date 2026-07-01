import api from './axios'

export const getTotalExpenses = async (data)=> {
    const request = await api.post("/api/categories/expenses", data);
    return request.data
}

export const getTotalIncomes = async (data)=> {
    const request = await api.post("/api/categories/incomes", data);
    return request.data
}

export const getRemainingAmount = async (data)=> {
    const request = await api.get("/api/categories/remaining-amount", data);
    return request.data
}