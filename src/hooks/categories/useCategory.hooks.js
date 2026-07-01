// import { useQuery } from "@tanstack/react-query";
// import { getTotalExpenses } from "../../services/financialSummary.service";
import { useMonthlySummary } from "../dashboard/useMonthlySummary.hooks";

// export const useAllCategories = () => {
//   return useQuery({
//     queryKey: ["categories"],
//     queryFn: getTotalExpenses,
//     retry: false,
//     staleTime: 5 * 60 * 1000,
//   });
// };

export const useCategoriesData = () => {
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
