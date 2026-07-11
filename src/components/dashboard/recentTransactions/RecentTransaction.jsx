import { Text } from "../../common";
import { FaArrowTrendDown, FaArrowTrendUp } from "../../../assets/icons/icons";
import { formatPrice, formatRecentDate } from "../../../utils";
import { useTranslation } from "react-i18next";

const RecentTransaction = ({ title, amount, date, isIncome = false }) => {
  const { t, i18n } = useTranslation();
  const isDepositToGoal = title.includes("إيداع في الهدف");
  const target = isDepositToGoal ? title.split(":")?.[1]?.trim() : null;
  return (
    <div className="bg-muted border-bottom-accent flex-between rounded-md p-3">
      <div className="flex-start gap-4">
        <span
          className={`text-4xl ${isIncome ? "text-green-500" : "text-red-500"}`}
        >
          {isIncome ? <FaArrowTrendDown /> : <FaArrowTrendUp />}
        </span>
        <div>
          <p className="text-primary font-semibold rtl:text-end">
            {isDepositToGoal
              ? t("goals.depositToGoal", { target })
              : title[0].toUpperCase() + title.slice(1)}
          </p>
          <span className="text-muted text-xs">
            {formatRecentDate(date, i18n.language)}
          </span>
        </div>
      </div>
      <div className="text-center">
        <p className={`${isIncome ? "text-green-500" : "text-red-500"} m-0 p-0`}>
          {formatPrice(amount, i18n.language)}
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
