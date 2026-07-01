import api from "./axios";

export const getBudgets = async () => {
  const response = await api.get("/api/budgets");
  return response.data;
};

export const getBudget = async (id) => {
  const response = await api.get(`/api/budgets/${id}`);
  return response.data;
};

export const addBudget = async (data) => {
  const response = await api.post(`/api/budgets`, data);
  return response.data;

};

export const editBudget = async ({id, data}) => {
  const response = await api.put(`/api/budgets/${id}`, data);
  return response.data;
};
export const deleteBudget = async (id) => {
  const response = await api.delete(`/api/budgets/${id}`);
  return response.data;
};
