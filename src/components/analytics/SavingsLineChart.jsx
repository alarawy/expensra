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
    <div className="card flex-around flex-2 flex-col overflow-hidden">
      <div className="md:text-md mb-3 flex gap-1 truncate px-4 text-sm whitespace-nowrap lg:text-xl ltr:mr-auto rtl:ml-auto">
        <Text
          tagElement="h4"
          i18nKey="analysis.netSavingsTrend"
          className="text-accent text-start font-semibold"
        />
        <Text
          tagElement="h6"
          i18nKey="analysis.netSavingsDescription"
          className="text-secondary mt-3 text-xs"
        />
      </div>

      <LineChart
        responsive
        style={{
          width: "100%",
          maxHeight: "400px",
          flex: 1,
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
          width={35}
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
