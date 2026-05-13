import SummaryCard from "./SummaryCard";
import {
  FaArrowTrendDown,
  FaArrowTrendUp,
  FaBitcoin,
} from "../../../assets/icons/icons";
import { useFinancialSummary } from "../../../hooks";

const SummaryCards = () => {
  const { data, isPending } = useFinancialSummary();
  const totalExpenses = data?.totalExpenses;
  const totalIncomes = data?.totalIncomes;
  const remainingAmount = data?.remainingAmount;
  
  return (
    <div className="m-0 flex flex-wrap gap-8 border-bottom py-10">
      <SummaryCard
        i18nKey="dashboard.totalBalance"
        amount={remainingAmount?.remaining_amount}
        isPending={isPending}
        >
        <FaBitcoin />
      </SummaryCard>
      <SummaryCard
        i18nKey="income.totalIncome"
        amount={totalIncomes?.incomes_by_category?.total_incomes}
        isPending={isPending}
        >
        <FaArrowTrendDown />
      </SummaryCard>
      <SummaryCard
        i18nKey="expenses.totalExpenses"
        amount={totalExpenses?.expenses_by_category?.total_expenses}
        isPending={isPending}
      >
        <FaArrowTrendUp />
      </SummaryCard>
    </div>
  );
};

export default SummaryCards;
