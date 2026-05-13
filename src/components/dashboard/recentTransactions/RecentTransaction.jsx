import { Text } from "../../common";
import { FaArrowTrendDown, FaArrowTrendUp } from "../../../assets/icons/icons";
import { formatPrice, formatDate } from "../../../utils";
import { useTranslation } from "react-i18next";

const RecentTransaction = ({ title, amount, date, isIncome = false }) => {
  const { i18n } = useTranslation();  
  return (
    <div className="bg-muted border-bottom-accent flex-between rounded-md p-3">
      <div className="flex-start gap-4">
        <span
          className={`text-4xl ${isIncome ? "text-accent" : "text-red-500"}`}
        >
          {isIncome ? <FaArrowTrendDown /> : <FaArrowTrendUp />}
        </span>
        <div>
          <p className="text-primary font-semibold">{title}</p>
          <span className="text-muted text-xs">
            {formatDate(date, i18n.language)}
          </span>
        </div>
      </div>
      <div className="text-center">
        <p className={`${isIncome ? "text-accent" : "text-red-500"} m-0 p-0`}>
          {formatPrice(amount)}
        </p>
        <Text
          i18nKey={`dashboard.${isIncome ? "income" : "expense"}`}
          className="text-muted text-xs"
        />
      </div>
    </div>
  );
};

export default RecentTransaction;
