import { useSearchParams } from "react-router-dom";
import { useFinancialSummary } from "../index";

export const useMonthlySummary = () => {
  const now = new Date();

  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  const [searchParams] = useSearchParams();

  const month = Number(searchParams.get("month")) || currentMonth;
  const year = Number(searchParams.get("year")) || currentYear;

  const prevMonth = month === 1 ? 12 : month - 1;
  const prevYear = month === 1 ? year - 1 : year;

  const { data: currentData, isPending: loadingCurrent } =
    useFinancialSummary({
      month,
      year,
    });

  const { data: prevData, isPending: loadingPrev } =
    useFinancialSummary({
      month: prevMonth,
      year: prevYear,
    });

  const totalIncomes = Number(
    currentData?.totalIncomes?.incomes_by_category?.total_incomes ?? 0
  );

  const totalExpenses = Number(
    currentData?.totalExpenses?.expenses?.total_expenses ?? 0
  );

  const totalBalance = totalIncomes - totalExpenses;

  const prevIncomes = Number(
    prevData?.totalIncomes?.incomes_by_category?.total_incomes ?? 0
  );

  const prevExpenses = Number(
    prevData?.totalExpenses?.expenses?.total_expenses ?? 0
  );

  const prevBalance = prevIncomes - prevExpenses;

  const calculateChange = (current, previous) => {
    const currentValue = Number(current);
    const previousValue = Number(previous);

    if (
      !Number.isFinite(currentValue) ||
      !Number.isFinite(previousValue)
    ) {
      return 0;
    }

    if (previousValue === 0) {
      return currentValue === 0 ? 0 : 100;
    }

    return Math.round(
      ((currentValue - previousValue) / Math.abs(previousValue)) * 100
    );
  };

  return {
    data: currentData,

    month,
    year,

    totalIncomes,
    totalExpenses,
    totalBalance,

    incomeChange: calculateChange(totalIncomes, prevIncomes),
    expenseChange: calculateChange(totalExpenses, prevExpenses),
    balanceChange: calculateChange(totalBalance, prevBalance),

    isPending: loadingCurrent || loadingPrev,
  };
};