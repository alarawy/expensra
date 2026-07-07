import SummaryCard from "./SummaryCard";
import {
  FaArrowTrendDown,
  FaArrowTrendUp,
  FaBitcoin,
} from "../../../assets/icons/icons";
import { useMonthlySummary } from "../../../hooks";

const SummaryCards = () => {
  const {
    totalIncomes,
    totalExpenses,
    totalBalance,
    balanceChange,
    isPending,
  } = useMonthlySummary();
  return (
    <div className="border-bottom m-0 flex flex-wrap gap-5 py-4">
      <SummaryCard
        i18nKey="dashboard.remainingBalance"
        amount={totalBalance}
        percentageChange={balanceChange}
        isPending={isPending}
      >
        <FaBitcoin />
      </SummaryCard>
      <SummaryCard
        variant="income"
        i18nKey="income.totalIncome"
        amount={totalIncomes}
        percentageChange={balanceChange}
        isPending={isPending}
      >
        <FaArrowTrendDown />
      </SummaryCard>
      <SummaryCard
        variant="expense"
        i18nKey="expenses.totalExpenses"
        amount={totalExpenses}
        percentageChange={balanceChange}
        isPending={isPending}
      >
        <FaArrowTrendUp />
      </SummaryCard>
    </div>
  );
};

export default SummaryCards;
