import { useTranslation } from "react-i18next";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const TrendsChart = ({ data }) => {
  const { t, i18n } = useTranslation();
  const dir = i18n.language === "ar";
  
  return (
    <AreaChart
      data={data}
      width="100%"
      height="100%"
      style={{maxHeight: "500px"}}
      responsive
    >
      <CartesianGrid strokeDasharray="3 3" stroke="#3990ab" reversed={dir} />
      <XAxis dataKey="date" reversed={dir} />
      <YAxis
        width="auto"
        orientation={dir ? "right" : "left"}
        tick={{ textAnchor: "end" }}
      />
      <Tooltip
        formatter={(value) => [value, t("expenses.spending")]}
        contentStyle={{
          borderRadius: "8px",
          color: "var(--tooltip-text)",
          border: "none",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
          background: "var(--tooltip-bg)",
        }}
      />
      <Area
        width="100%"
        type="monotone"
        dataKey="amount"
        stroke="#5abccf"
        fill="#5abccf"
      />
    </AreaChart>
  );
};

export default TrendsChart;
