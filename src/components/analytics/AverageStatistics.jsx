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
    <div className="card flex-1">
      <Text
        tagElement="h2"
        i18nKey="analysis.averageStatistics"
        className="section-heading text-accent"
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
