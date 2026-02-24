import { useTranslation } from "react-i18next";
import { Text } from "../../common";
import { FaArrowTrendDown, FaArrowTrendUp } from "../../../assets/icons/icons";
import { formatNumber, getCurrentTime } from "../../../utils";

const RecentTransaction = ({ title, amount, isIncome = false }) => {
  const { i18n } = useTranslation();
  return (
    <div className="bg-muted border-bottom-accent flex-between rounded-md p-3">
      <div className="flex-start gap-4">
        <span className="text-accent text-4xl">
          {isIncome ? <FaArrowTrendDown /> : <FaArrowTrendUp />}
        </span>
        <div>
          <p className="text-primary font-semibold">{title}</p>
          <span className="text-muted text-xs">
            {getCurrentTime(new Date(), i18n.language)}
          </span>
        </div>
      </div>
      <div className="text-center">
        <p className={`${!isIncome && "text-red-500"} m-0 p-0`}>
          ${formatNumber(amount)}
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
