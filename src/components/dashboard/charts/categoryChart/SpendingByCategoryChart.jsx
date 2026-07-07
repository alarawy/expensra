import { useExpenseCategories } from "../../../../hooks";
import { Spinner, Text } from "../../../common";
import CategoryPieChart from "./CategoryPieChart";

const SpendingByCategoryChart = () => {
  const { data, isPending } = useExpenseCategories();
  return (
    <div className="card flex-1 ">
      <Text
        tagElement="h5"
        i18nKey="expenses.spendingByCategory"
        className="text-lg font-semibold m-0"
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
