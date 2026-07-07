import api from './axios'

export const getGoals = async ()=> {
    const response = await api.get('/api/goals')
    return response.data
}

export const getGoal = async (id)=> {
    const response = await api.get(`/api/goals/${id}`)
    return response.data
}

export const addGoal = async (data)=> {
    const response = await api.post('/api/goals', data)
    return response.data
}

export const editGoal = async ({id,data})=> {
    const response = await api.put(`/api/goals/${id}`, data)
    return response.data
}

export const deleteGoal = async (id)=> {
    const response = await api.delete(`/api/goals/${id}`)
    return response.data
}

export const addDeposit = async ({id, data}) => {
    const response = await api.post(`/api/goals/${id}/deposit`, data)
    return response.data
}

export const remainingBalance = async (data)=> {
    const response = await api.post("/api/monthly-surplus", data);
    return response.data
}