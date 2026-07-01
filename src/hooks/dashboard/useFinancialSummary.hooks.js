import { useQuery } from "@tanstack/react-query";
import {
  getTotalExpenses,
  getTotalIncomes,
} from "../../services/financialSummary.service";

export const useFinancialSummary = (month = new Date().getMonth() + 1) => {
  return useQuery({
    queryKey: ["financial-summary", month],
    
    queryFn: async () => {
      const [totalExpenses, totalIncomes] = await Promise.all([
        getTotalExpenses(month),
        getTotalIncomes(month),
      ]);
      return {
        totalExpenses,
        totalIncomes,
      };
    },
    staleTime: 5 * 60 * 1000,
    retry: false,
  });
};
