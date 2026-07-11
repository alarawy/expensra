import { useExpenseCategories } from "../../../../hooks";
import { Spinner, Text } from "../../../common";
import CategoryPieChart from "./CategoryPieChart";

const SpendingByCategoryChart = () => {
  const { data, isPending } = useExpenseCategories();
  return (
    <div className="card flex-1">
      <Text
        tagElement="h2"
        i18nKey="expenses.spendingByCategory"
        className="section-heading"
      />
      {isPending ? (
        <Spinner />
      ) : data.length ? (
        <CategoryPieChart data={data} />
      ) : (
        <Text
          i18nKey="dashboard.noCategoriesData"
          tagElement="p"
          className="empty-message"
        />
      )}
    </div>
  );
};

export default SpendingByCategoryChart;
