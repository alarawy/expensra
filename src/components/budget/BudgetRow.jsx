import { useTranslation } from "react-i18next";
import {
  formatDateRange,
  formatPrice,
  formatTranslatedText,
} from "../../utils";
import { ProgressBar } from "../common";

const BudgetRow = ({ item, children }) => {
  const { t, i18n } = useTranslation();
  const percentage = Math.min(100, (item.spent / item.limitAmount) * 100);

  return (
    <div className="border-bottom flex items-center px-3 py-5">
      <p className="flex-1">
        {formatTranslatedText(item.budgetName, "categories", t, i18n)}
      </p>
      <p className="flex-1">{formatPrice(item.spent, i18n.language)}</p>
      <p className="flex-1">{formatPrice(item.limitAmount, i18n.language)}</p>
      <p className="flex-1">{formatDateRange(item.startDate, item.endDate, i18n.language)}</p>
      <ProgressBar percentage={percentage} />
      {children}
    </div>
  );
};
export default BudgetRow;
