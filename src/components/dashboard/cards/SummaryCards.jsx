import SummaryCard from "./SummaryCard";
import {
  FaArrowTrendDown,
  FaArrowTrendUp,
  FaBitcoin,
} from "../../../assets/icons/icons";
import { useMonthlySummary } from "../../../hooks";

const SummaryCards = () => {
  const { totalIncomes, totalExpenses, totalBalance, isPending } =
    useMonthlySummary();
  return (
    <div className="border-bottom m-0 flex flex-wrap gap-8 py-10">
      <SummaryCard
        i18nKey="dashboard.totalBalance"
        amount={totalBalance}
        isPending={isPending}
      >
        <FaBitcoin />
      </SummaryCard>
      <SummaryCard
        i18nKey="income.totalIncome"
        amount={totalIncomes}
        isPending={isPending}
      >
        <FaArrowTrendDown />
      </SummaryCard>
      <SummaryCard
        i18nKey="expenses.totalExpenses"
        amount={totalExpenses}
        isPending={isPending}
      >
        <FaArrowTrendUp />
      </SummaryCard>
    </div>
  );
};

export default SummaryCards;
