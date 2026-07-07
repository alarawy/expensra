import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addDeposit } from "../../services/goals.service";
import { transactionKeys } from "../../utils";

const month = new Date().getMonth() + 1;

export const useDeposit = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addDeposit,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["goals"],
      });
      queryClient.invalidateQueries({
        queryKey: transactionKeys.monthly(month),
      });
      queryClient.invalidateQueries({
        queryKey: transactionKeys.financial(month),
      });
    },
  });
};
