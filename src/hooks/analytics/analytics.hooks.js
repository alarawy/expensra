import { useQueries } from "@tanstack/react-query";
import {
  getTotalExpenses,
  getTotalIncomes,
} from "../../services/financialSummary.service";
import { monthNames } from "../../utils";
import { useTranslation } from "react-i18next";

export const useGetSummaryAnalytics = () => {
  const { t } = useTranslation();
  const currentMonth = new Date().getMonth() + 1;

  const lastSixMonths = Array.from({ length: 6 }, (_, i) => {
    let month = currentMonth - 5 + i;

    if (month <= 0) month += 12;

    return month;
  });

  const queries = useQueries({
    queries: lastSixMonths.map((month) => ({
      queryKey: ["analytics", { month: month }],
      queryFn: async () => {
        const [totalExpenses, totalIncomes] = await Promise.all([
          getTotalExpenses({ month: month }),
          getTotalIncomes({ month: month }),
        ]);

        return {
          month,
          totalExpenses: totalExpenses?.expenses?.total_expenses ?? 0,
          totalIncomes: totalIncomes?.incomes_by_category?.total_incomes ?? 0,
          categoryIncome: totalIncomes?.incomes_by_category?.incomes_by_category,
          categoryExpenses: totalExpenses?.expenses?.expenses_by_category,
        };
      },
      staleTime: 5 * 60 * 1000,
      retry: false,
    })),
  });

  const chartData = queries
    .filter((q) => q.data)
    .map((q) => ({
      month: t(`months.${monthNames[q.data.month - 1]}`),
      income: Number(q.data.totalIncomes),
      expenses: Number(q.data.totalExpenses),
      savings: q.data.totalIncomes - q.data.totalExpenses,
      categoryExpenses: q.data.categoryExpenses,
      categoryIncome: q.data.categoryIncome,
    }));
    
  return {
    data: chartData,
    isPending: queries.some((q) => q.isPending),
    isError: queries.some((q) => q.isError),
  };
};
