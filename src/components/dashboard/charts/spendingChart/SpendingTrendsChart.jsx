import { useTrendsData } from "../../../../hooks";
import { Spinner, Text } from "../../../common";
import TrendsChart from "./TrendsChart";

const SpendingTrendsChart = () => {
  const { trendsData, isPending } = useTrendsData();
  return (
    <div className="flex w-full flex-2 flex-col md:items-stretch">
      <Text
        tagElement="h2"
        i18nKey="expenses.spendingTrends"
        className="section-heading text-primary mb-5"
      />
      {isPending ? (
        <Spinner />
      ) : trendsData.length ? (
        <TrendsChart data={trendsData} />
      ) : (
        <Text
          i18nKey="dashboard.noTrendsYet"
          tagElement="p"
          className="empty-message"
        />
      )}
    </div>
  );
};

export default SpendingTrendsChart;
