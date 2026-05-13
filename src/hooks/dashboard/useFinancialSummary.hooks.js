import { useQuery } from "@tanstack/react-query"
import { getRemainingAmount, getTotalExpenses, getTotalIncomes } from "../../services/financialSummary.service";

export const useFinancialSummary = () => {
    return useQuery({
        queryKey: ["financialSummary"],
        queryFn: async () => {
            const [totalExpenses, totalIncomes, remainingAmount,] = await Promise.all([
                getTotalExpenses(),
                getTotalIncomes(),
                getRemainingAmount(),
            ]);

            return {
                totalExpenses,
                totalIncomes,
                remainingAmount,
            };
        },
        staleTime: 5 * 60 * 1000,
        retry: false,
    });
};