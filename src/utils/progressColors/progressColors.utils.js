const goalColors = [
  { min: 90, color: "bg-emerald-500" },
  { min: 75, color: "bg-lime-500" },
  { min: 60, color: "bg-yellow-500" },
  { min: 40, color: "bg-orange-500" },
  { min: 0, color: "bg-red-500" },
];

const budgetColors = [
  { min: 100, color: "bg-red-600" },
  { min: 80, color: "bg-orange-500" },
  { min: 60, color: "bg-yellow-500" },
  { min: 40, color: "bg-lime-500" },
  { min: 0, color: "bg-green-500" },
];

export const getColor = (variant, percentage) => {
  const colors = variant === "goals" ? goalColors : budgetColors;
  return colors.find(c => percentage >= c.min)?.color;
};