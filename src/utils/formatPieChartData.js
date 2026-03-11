const LIGHT_COLORS = [
  "#2563EB", // Blue
  "#16A34A", // Green
  "#F59E0B", // Amber
  "#EF4444", // Red
  "#8B5CF6", // Violet
  "#06B6D4", // Cyan
  "#EC4899", // Pink
  "#84CC16", // Lime
  "#F97316", // Orange
  "#14B8A6"  // Teal
];
const DARK_COLORS = [
  "#60A5FA", // Light Blue
  "#4ADE80", // Light Green
  "#FBBF24", // Yellow
  "#F87171", // Soft Red
  "#C084FC", // Soft Purple
  "#22D3EE", // Bright Cyan
  "#F472B6", // Soft Pink
  "#A3E635", // Lime
  "#FB923C", // Orange
  "#2DD4BF"  // Teal
];
const formatPieChartData = (data, isDarkMode, t) => {
  const COLORS = isDarkMode ? LIGHT_COLORS : DARK_COLORS;

  return data.map((item, index) => ({
    ...item,
    name: t(`categories.${item.name}`),
    fill: COLORS[index % COLORS.length],
  }));
};
export default formatPieChartData