const formatDate = (
  date,
  locale = "en-US"
) => {
  return new Date(date).toLocaleString(locale, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: "numeric",
    // minute: "2-digit",
    // second: "2-digit",
    // hour12: true,
  });
};
export default formatDate;