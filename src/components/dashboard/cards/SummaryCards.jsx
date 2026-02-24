import SummaryCard from "./SummaryCard";
import {
  FaArrowTrendDown,
  FaArrowTrendUp,
  FaBitcoin,
} from "../../../assets/icons/icons";

const SummaryCards = () => {
  return (
    <div className="m-0 mt-5 flex flex-wrap gap-8">
      <SummaryCard
        i18nKey="dashboard.totalBalance"
        amount="12,450,000"
        changePercent="2.5"
      >
        <FaBitcoin />
      </SummaryCard>
      <SummaryCard
        i18nKey="income.totalIncome"
        amount="12,450,000"
        changePercent="2.5"
      >
        <FaArrowTrendDown />
      </SummaryCard>
      <SummaryCard
        i18nKey="expenses.totalExpenses"
        amount="12,450,000"
        changePercent="2.5"
      >
        <FaArrowTrendUp />
      </SummaryCard>
    </div>
  );
};

export default SummaryCards;
