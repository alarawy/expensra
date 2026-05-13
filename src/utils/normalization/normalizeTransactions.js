const normalizeTransactions = (data) => {
  return Array.isArray(data)
    ? data
    : data?.transactions || data?.data || [];
};
export default normalizeTransactions