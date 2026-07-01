import api from "./axios";

export const upgradePlan = async () => {
  const response = await api.get("/api/upgrade-to-premium");
  return response.data;
};