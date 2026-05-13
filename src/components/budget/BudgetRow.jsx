import { useTranslation } from "react-i18next";
import { formatPrice, formatTranslatedText } from "../../utils";
import { ProgressBar } from "../common";

const BudgetRow = ({ item }) => {
  const { t, i18n } = useTranslation();
  const percentage = Math.min(100, (item.spent / item.limit) * 100);

  return (
    <div className="border-bottom flex items-center px-3 py-5">
      <p className="flex-1">
        {formatTranslatedText(item.category, "categories", t, i18n)}
      </p>
      <p className="flex-1">{formatPrice(item.spent)}</p>
      <p className="flex-1">{formatPrice(item.limit)}</p>
      <ProgressBar percentage={percentage} />
    </div>
  );
};
export default BudgetRow;
