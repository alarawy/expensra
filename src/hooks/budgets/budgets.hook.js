import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addBudget,
  deleteBudget,
  editBudget,
  getBudget,
  getBudgets,
} from "../../services/budgets.service";

export const useGetBudgets = () => {
  return useQuery({
    queryKey: ["budgets"],
    queryFn: getBudgets,
    retry: 0,
    staleTime: 5 * 60 * 1000,
  });
};


export const useGetBudget = (id) => {
  return useQuery({
    queryKey: ["budgets", id],
    queryFn: ()=> getBudget(id),
    enabled: !!id,
  });
};

export const useAddBudget = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addBudget,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["budgets"],
      });
      
    },

    onError: (error) => {
      console.error(error);
    },
  });
};

export const useEditBudget = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editBudget,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["budgets"],
      });
    },
  });
};

export const useDeleteBudget = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteBudget,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["budgets"],
      });
    },
  });
};
