export const formatDate = (inputDate) => {
  if (!inputDate) return "";

  const date = new Date(inputDate);
  const now = new Date();

  const pad = (n) => String(n).padStart(2, "0");

  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
};
