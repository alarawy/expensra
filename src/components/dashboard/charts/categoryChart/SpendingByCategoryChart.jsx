import { useCategoriesData } from "../../../../hooks";
import { Spinner, Text } from "../../../common";
import CategoryPieChart from "./CategoryPieChart";

const SpendingByCategoryChart = () => {
  const { data, isPending } = useCategoriesData();
  return (
    <div className="card relative flex min-h-110 w-full flex-1 flex-col">
      <Text
        tagElement="h5"
        i18nKey="expenses.spendingByCategory"
        className="text-lg font-semibold"
      />
      {isPending ? (
        <Spinner />
      ) : data.length ? (
        <CategoryPieChart data={data} />
      ) : (
        <Text
          i18nKey="dashboard.noCategoriesData"
          className="flex-center text-secondary flex-1 text-xl"
        />
      )}
    </div>
  );
};

export default SpendingByCategoryChart;
