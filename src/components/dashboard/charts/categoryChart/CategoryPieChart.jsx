import { useTranslation } from "react-i18next";
import { Label, Legend, Pie, PieChart, Tooltip } from "recharts";
import { useAppMode } from "../../../../hooks";
import { formatPieChartData, formatPrice } from "../../../../utils";
import { CustomLegend } from "../../index";

const CategoryPieChart = ({ data }) => {
  const { t, i18n } = useTranslation();
  const { isDarkMode } = useAppMode();

  const translatedData = formatPieChartData(data, isDarkMode, t, i18n);

  const total = (translatedData || []).reduce(
    (sum, item) => sum + item.total,
    0,
  );

  return (
    <PieChart responsive width="100%" height={500} >
      <Pie
        data={translatedData}
        dataKey="total"
        nameKey="name"
        innerRadius={70}
        outerRadius={100}
        paddingAngle={2}
        stroke="none"
      >
        <Label position="center" fill={`${isDarkMode ? "#9ca3af" : "#475569"}`}>
          {formatPrice(total)}
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
