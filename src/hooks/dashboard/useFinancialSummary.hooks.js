import { useQuery } from "@tanstack/react-query";
import {
  getTotalExpenses,
  getTotalIncomes,
} from "../../services/financialSummary.service";
import { transactionKeys } from "../../utils";

export const useFinancialSummary = ({month}) => {
  return useQuery({
    queryKey: transactionKeys.financial(month),
    
    queryFn: async () => {
      const [totalExpenses, totalIncomes] = await Promise.all([
        getTotalExpenses({month}),
        getTotalIncomes({month}),
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
