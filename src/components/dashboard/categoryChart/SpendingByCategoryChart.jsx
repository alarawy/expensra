import { CategoryPieChart } from "../index";
import { Text } from "../../common";

const SpendingByCategoryChart = () => {
  return (
    <div className="card w-full flex-1">
      <Text
        tagElement="h5"
        i18nKey="expenses.spendingByCategory"
        className="text-lg font-semibold"
      />
      <CategoryPieChart />
    </div>
  );
};

export default SpendingByCategoryChart;
