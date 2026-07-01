import { useSearchParams } from "react-router-dom";
import { useFinancialSummary } from "../index";

export const useMonthlySummary = () => {
  const currentMonth = new Date().getMonth() + 1;
  const [searchParams] = useSearchParams();

  const month = Number(searchParams.get("month")) || currentMonth;

  const { data, isPending } = useFinancialSummary({ month: month });

  const totalIncomes =
    data?.totalIncomes?.incomes_by_category?.total_incomes ?? 0;

  const totalExpenses = data?.totalExpenses?.expenses?.total_expenses ?? 0;

  const totalBalance = totalIncomes - totalExpenses;

  return {
    data,
    month,
    totalIncomes,
    totalExpenses,
    totalBalance,
    isPending,
  };
};
