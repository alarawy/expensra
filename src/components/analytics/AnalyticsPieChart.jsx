import { Legend, Pie, PieChart, Sector, Tooltip } from "recharts";
import { Text } from "../common";
import { useTranslation } from "react-i18next";
import { RenderCustomizedLabel } from "./index";
import { formatPieChartData } from "../../utils/index";
import { useAppMode } from "../../hooks";
import useIsMobile from "../../hooks/mobile/useMobile";

const AnalyticsPieChart = ({ data }) => {
  const { t } = useTranslation();
  const { isDarkMode } = useAppMode();
  const translatedData = formatPieChartData(data, isDarkMode, t);
  const { isMobile } = useIsMobile();

  const style = isMobile
    ? {
        marginTop: "20px",
        lineHeight: "24px",
      }
    : {
        top: "50%",
        right: "0",
        transform: "translate(0, -50%)",
        lineHeight: "24px",
      };

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
          minHeight: "30vh",
          maxHeight: "50vh",
          aspectRatio: 1.618,
        }}
        responsive
      >
        <Pie
          data={translatedData}
          dataKey="value"
          nameKey="name"
          labelLine={false}
          label={RenderCustomizedLabel}
          cx={isMobile ? "" : "25%"}
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

        <Legend
          iconSize={15}
          layout={isMobile ? "horizontal" : "vertical"}
          verticalAlign={isMobile ? "bottom" : "middle"}
          wrapperStyle={style}
        />
      </PieChart>
    </div>
  );
};
export default AnalyticsPieChart;
