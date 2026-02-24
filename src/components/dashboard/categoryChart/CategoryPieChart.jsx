import { useTranslation } from "react-i18next";
import { Label, Legend, Pie, PieChart, Tooltip } from "recharts";
import { useAppMode } from "../../../hooks";
import { formatNumber } from "../../../utils";
import { CustomLegend } from "../index";
import { spendingByCategoryData } from "../../../assets/data/spendingByCategoryData";

const COLORS = [
  "#3b82f6", // blue
  "#10b981", // green
  "#f59e0b", // amber
  "#ef4444", // red
  "#8b5cf6", // purple
];
const CategoryPieChart = () => {
  const { isDarkMode } = useAppMode();
  const { t } = useTranslation();
  
  const total = spendingByCategoryData.reduce(
    (sum, item) => sum + item.value,
    0,
  );

  const translatedData = spendingByCategoryData.map((item, index) => ({
    ...item,
    name: t(`categories.${item.name}`),
    fill: COLORS[index % COLORS.length],
  }));

  return (
    <PieChart responsive width="100%" height={400}>
      <Pie
        data={translatedData}
        dataKey="value"
        nameKey="name"
        innerRadius={60}
        outerRadius={90}
        paddingAngle={2}
        stroke="none"
      >
        <Label position="center" fill={`${isDarkMode ? "#9ca3af" : "#475569"}`}>
          {`${t("dashboard.total")}: ${formatNumber(total)}`}
        </Label>
      </Pie>
      <Legend content={<CustomLegend />} />
      <Tooltip />
    </PieChart>
  );
};

export default CategoryPieChart;
