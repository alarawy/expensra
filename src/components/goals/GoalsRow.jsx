import { useTranslation } from "react-i18next";
import { formatPrice, formatTranslatedText } from "../../utils";
import { ProgressBar } from "../common";

const GoalsRow = ({ item, children }) => {
  const { t, i18n } = useTranslation();
  const percentage = Math.min(
    100,
    (item.savedAmount / item.targetAmount) * 100,
  );

  return (
    <div className="border-bottom flex items-center px-3 py-5">
      <p className="flex-1">
        {formatTranslatedText(item.goalName, "categories", t, i18n)}
      </p>
      <p className="flex-1">{formatPrice(item.savedAmount)}</p>
      <p className="flex-1">{formatPrice(item.targetAmount)}</p>
      <p className="flex-1">{item.deadline}</p>
      <ProgressBar percentage={percentage} variant="goals" />
      {children}
    </div>
  );
};

export default GoalsRow;
