import api from './axios'

export const getTotalExpenses = async ()=> {
    const request = await api.get("/api/categories/expenses");
    return request.data
}

export const getTotalIncomes = async ()=> {
    const request = await api.get("/api/categories/incomes");
    return request.data
}

export const getRemainingAmount = async ()=> {
    const request = await api.get("/api/categories/remaining-amount ");
    return request.data
}

export const getAllCategories = async ()=> {
    const request = await api.get("/api/categories");
    return request.data
}