import { useTranslation } from "react-i18next";
import { Text } from "../common";
import FinancialInsightsItem from "./FinancialInsightsItem";
import {
  FaArrowTrendDown,
  FaArrowTrendUp,
  FaChartPie,
  FaStar,
  VscLightbulbSparkle,
} from "../../assets/icons/icons";
import { getTrendMessage } from "../../utils";

const FinancialInsights = ({ comparison, insights }) => {
  const period = 5;
  const { t } = useTranslation();

  const incomeMessage = getTrendMessage({
    t,
    type: "income",
    trend: comparison.income.trend,
    percentage: comparison.income.percentage,
    period: period,
  });

  const expensesMessage = getTrendMessage({
    t,
    type: "expenses",
    trend: comparison.expenses.trend,
    percentage: comparison.expenses.percentage,
    period: period,
  });

  return (
    <div className="flex-1">
      <Text
        tagElement="h2"
        i18nKey="analysis.financialInsights"
        className="section-heading text-accent"
      />
      {!insights.highestIncomeCategory ? (
        <Text
          tagElement="p"
          i18nKey="analysis.noInsights"
          className="empty-message"
        />
      ) : (
        <div className="space-y-1">
          <FinancialInsightsItem type="income" icon={<FaArrowTrendUp />}>
            {incomeMessage}
          </FinancialInsightsItem>

          <FinancialInsightsItem type="expenses" icon={<FaArrowTrendDown />}>
            {expensesMessage}
          </FinancialInsightsItem>

          <FinancialInsightsItem type="savings" icon={<FaChartPie />}>
            {t("analysis.savedMostInMonth", {
              month: insights.bestSavingMonth,
            })}
          </FinancialInsightsItem>

          <FinancialInsightsItem type="warning" icon={<FaStar />}>
            {t("analysis.highestExpenseCategory", {
              category: t(`categories.${insights.highestExpenseCategory}`),
              period: ` ${period + 1} ${t("dates.months")}`,
            })}
          </FinancialInsightsItem>
          <FinancialInsightsItem type="tips" icon={<VscLightbulbSparkle />}>
            {t("analysis.keepExpensesBelowIncome")}
          </FinancialInsightsItem>
        </div>
      )}
    </div>
  );
};

export default FinancialInsights;
