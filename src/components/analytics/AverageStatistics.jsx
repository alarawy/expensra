import {
  FaArrowTrendDown,
  FaArrowTrendUp,
  FaArrowUp,
  FaStar,
  GiWallet,
  LuArrowDownToLine,
} from "../../assets/icons/icons";
import { Text } from "../common";
import { AnalyticsCard } from "./index";

const AverageStatistics = ({ average, highest }) => {
  return (
    <div className="card w-full flex-1">
      <Text
        tagElement="h2"
        i18nKey="analysis.averageStatistics"
        className="text-accent md:text-md pb-3 text-sm font-semibold lg:text-2xl"
      />

      <div className="flex-around">
        <AnalyticsCard
          type="income"
          title="averageMonthlyIncome"
          amount={average.income}
        >
          <FaArrowTrendUp />
        </AnalyticsCard>

        <AnalyticsCard
          type="expenses"
          title="averageMonthlyExpenses"
          amount={average.expenses}
        >
          <FaArrowTrendDown />
        </AnalyticsCard>

        <AnalyticsCard
          type="savings"
          title="averageMonthlySavings"
          amount={average.savings}
        >
          <GiWallet />
        </AnalyticsCard>
      </div>
      <div className="flex-around">
        <AnalyticsCard
          type="income"
          title="highestIncomeMonth"
          amount={highest?.income}
        >
          <FaArrowUp />
        </AnalyticsCard>

        <AnalyticsCard
          type="expenses"
          title="highestExpensesMonth"
          amount={highest?.expenses}
        >
          <LuArrowDownToLine />
        </AnalyticsCard>

        <AnalyticsCard
          type="savings"
          title="highestSavingsMonth"
          amount={highest?.savings}
        >
          <FaStar />
        </AnalyticsCard>
      </div>
    </div>
  );
};

export default AverageStatistics;
