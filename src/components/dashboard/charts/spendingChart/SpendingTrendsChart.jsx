import { useTrendsData } from "../../../../hooks";
import { Spinner, Text } from "../../../common";
import TrendsChart from "./TrendsChart";

const SpendingTrendsChart = () => {
  const { trendsData, isPending } = useTrendsData();
  return (
    <div className="flex w-full flex-2 flex-col">
      <Text
        tagElement="h5"
        i18nKey="expenses.spendingTrends"
        className="text-primary mb-5 text-lg font-semibold"
      />
      {isPending ? (
        <Spinner />
      ) : trendsData.length ? (
        <TrendsChart data={trendsData} />
      ) : (
        <Text
          i18nKey="dashboard.noTrendsYet"
          className="flex-center text-secondary flex-1 text-2xl"
        />
      )}
    </div>
  );
};

export default SpendingTrendsChart;
