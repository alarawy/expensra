import { useMutation, useQueryClient } from "@tanstack/react-query";
import { remainingBalance } from "../../services/goals.service";

export const useRemainingBalance = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: remainingBalance,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["remaining-balance"],
      });
    },
  });
};
