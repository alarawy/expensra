export const getTrendMessage = ({
  t,
  type,
  trend,
  percentage,
  period,
}) => {
  const key =
    trend === "increase"
      ? `analysis.${type}Increased`
      : trend === "decrease"
      ? `analysis.${type}Decreased`
      : `analysis.${type}Same`;

  return t(key, {
    percentage,
    period,
  });
};