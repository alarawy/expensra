export const normalizeData = (data) => {
  return Array.isArray(data)
    ? data
    : data?.transactions || data?.data || data?.categories || [];
};
