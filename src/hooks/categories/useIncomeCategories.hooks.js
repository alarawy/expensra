import { useMonthlySummary } from "../dashboard/useMonthlySummary.hooks";

export const useIncomeCategories = () => {
  const { data: incomesCategories, isPending } = useMonthlySummary();
  const categories =
    incomesCategories?.totalIncomes?.incomes_by_category?.incomes_by_category;
  const data =
    categories?.map((cat) => ({
      categoryName: cat.category_name,
    })) || [];

  return { data, isPending };
};