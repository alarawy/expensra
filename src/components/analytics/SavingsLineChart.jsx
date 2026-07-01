import { useTranslation } from "react-i18next";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Text } from "../common/index";

const SavingsLineChart = ({ data }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <div className="bg-primary card m-0 w-full flex-1 ltr:pl-0 rtl:pr-0">
      <div className="flex-start md:text-md m-0 gap-1 truncate p-4 pt-0 text-sm whitespace-nowrap lg:text-2xl">
        <Text
          tagElement="h4"
          i18nKey="analysis.netSavingsTrend"
          className="text-accent font-semibold"
        />
        <Text
          tagElement="h4"
          i18nKey="analysis.netSavingsDescription"
          className="text-secondary"
        />
      </div>

      <LineChart
        responsive
        style={{
          width: "100%",
          maxHeight: "200px",
          aspectRatio: 1.618,
        }}
        data={data}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="#3990ab"
          reversed={isRTL}
        />

        <XAxis dataKey="month" reversed={isRTL} tick={{ fontSize: "14px" }} />

        <YAxis
          width={60}
          orientation={isRTL ? "right" : "left"}
          tick={{ textAnchor: "end", fontSize: "12px" }}
        />

        <Tooltip
          cursor={{ stroke: "transparent" }}
          contentStyle={{
            borderRadius: "8px",
            color: "var(--tooltip-text)",
            border: "none",
            boxShadow: "0 2px 6px #00000026",
            background: "var(--tooltip-bg)",
          }}
        />

        <Line
          type="monotone"
          dataKey="savings"
          name={t("analysis.savings")}
          stroke="var(--chart-income)"
          activeDot={{ r: 6 }}
          strokeWidth={2}
        />
      </LineChart>
    </div>
  );
};

export default SavingsLineChart;
