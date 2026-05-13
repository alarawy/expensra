import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { Text } from "../common";
import { useTranslation } from "react-i18next";
import { RenderCustomizedLabel } from "./index";
import { formatPieChartData } from "../../utils/index";
import { useAppMode } from "../../hooks";

const AnalyticsPieChart = ({ data }) => {
  const { t, i18n } = useTranslation();
  const { isDarkMode } = useAppMode();
  const translatedData = formatPieChartData(data, isDarkMode, t, i18n);

  return (
    <div className="bg-primary mt-10 rounded-xl p-5 md:p-10">
      <Text
        tagElement="h5"
        i18nKey="dashboard.expensesByCategory"
        className="text-lg font-semibold"
      />

      <PieChart
        style={{
          width: "100%",
          minHeight: "40vh",
          maxHeight: "60vh",
          aspectRatio: 1.618,
        }}
      >
        <Pie
          data={translatedData}
          dataKey="value"
          nameKey="name"
          labelLine={false}
          label={RenderCustomizedLabel}
        />
        <Tooltip
          itemStyle={{ color: "var(--tooltip-text)" }}
          contentStyle={{
            borderRadius: "8px",
            border: "none",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
            background: "var(--tooltip-bg)",
          }}
        />
        <Legend />
      </PieChart>
    </div>
  );
};

export default AnalyticsPieChart;
