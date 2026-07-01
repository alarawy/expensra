import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addDeposit } from "../../services/goals.service";

export const useAddDeposit = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addDeposit,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["goals"],
      });
    },

    onError: (error) => {
      console.error(error);
    },
    onstalled: ()=> {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      queryClient.invalidateQueries({ queryKey: ["financialSummary"] });
    }
  });
};
