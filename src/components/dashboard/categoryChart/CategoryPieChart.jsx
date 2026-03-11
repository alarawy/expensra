import { useTranslation } from "react-i18next";
import { Label, Legend, Pie, PieChart, Tooltip } from "recharts";
import { useAppMode } from "../../../hooks";
import { formatNumber, formatPieChartData } from "../../../utils";
import { CustomLegend } from "../index";
import { spendingByCategoryData } from "../../../assets/data/spendingByCategoryData";

const CategoryPieChart = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useAppMode();
  
  const translatedData = formatPieChartData(spendingByCategoryData, isDarkMode, t );
  
  const total = translatedData.reduce(
    (sum, item) => sum + item.value,
    0,
  );

  
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
      <Tooltip
        itemStyle={{ color: "var(--tooltip-text)" }}
        contentStyle={{
          borderRadius: "8px",
          border: "none",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
          background: "var(--tooltip-bg)",
        }}
      />
    </PieChart>
  );
};

export default CategoryPieChart;
