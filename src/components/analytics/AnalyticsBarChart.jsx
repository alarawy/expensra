import { useTranslation } from "react-i18next";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Text } from '../common/index'

const AnalyticsBarChart = ({ data }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  return (
    <div className="flex-3 card">
      <div className="section-heading flex-center">
        <Text tagElement="h2" i18nKey="sidebar.income" />
        <span className="font-bold text-accent px-1">&</span>
        <Text tagElement="h2" i18nKey="sidebar.expense" />
      </div>
      <BarChart
        style={{
          width: "100%",
          maxHeight: "300px",
          aspectRatio: 1.618,
        }}
        responsive
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="#3990ab"
          reversed={isRTL}
        />
        <XAxis
          dataKey="month"
          reversed={isRTL}
        />
        <YAxis
          width="auto"
          orientation={isRTL ? "right" : "left"}
          tick={{ textAnchor: "end" }}
        />
        <Tooltip
          cursor={{ fill: "transparent" }}
          contentStyle={{
            borderRadius: "8px",
            color: "var(--tooltip-text)",
            border: "none",
            boxShadow: "0 2px 6px #00000026",
            background: "var(--tooltip-bg)",
          }}
        />
        <Legend />
        <Bar
          dataKey="expenses"
          name={t("transactions.expense")}
          fill="var(--chart-expense)"
          activeBar={{fill: "var(--chart-expense-active)"}}
          cursor="pointer"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="income"
          name={t("transactions.income")}
          fill="var(--chart-income)"
          activeBar={{fill: "var(--chart-income-active)"}}
          cursor="pointer"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </div>
  );
};

export default AnalyticsBarChart;
