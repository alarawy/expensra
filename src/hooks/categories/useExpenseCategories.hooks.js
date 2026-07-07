import { useMonthlySummary } from "../dashboard/useMonthlySummary.hooks";

export const useExpenseCategories = () => {
  const { data: expensesCategories, isPending } = useMonthlySummary();
  const categories =
    expensesCategories?.totalExpenses?.expenses?.expenses_by_category;
  const data =
    categories?.map((cat) => ({
      categoryName: cat.category_name,
      totalExpenses: cat.expenses,
    })) || [];

  return { data, isPending };
};
