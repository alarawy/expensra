import { useTranslation } from "react-i18next";
import { formatPrice, formatTranslatedText } from "../../utils";
import { ProgressBar } from "../common";

const BudgetRow = ({ item, children }) => {
  const { t, i18n } = useTranslation();
  const percentage = Math.min(100, (item.spent / item.limitAmount) * 100);

  return (
    <div className="border-bottom flex items-center px-3 py-5">
      <p className="flex-1">
        {formatTranslatedText(item.budgetName, "categories", t, i18n)}
      </p>
      <p className="flex-1">{formatPrice(item.spent)}</p>
      <p className="flex-1">{formatPrice(item.limitAmount)}</p>
      <p className="flex-1">{item.startDate}</p>
      <p className="flex-1">{item.endDate}</p>
      <ProgressBar percentage={percentage} variant="goals"/>
      {children}
    </div>
  );
};
export default BudgetRow;
