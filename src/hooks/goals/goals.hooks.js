import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addGoal,
  deleteGoal,
  editGoal,
  getGoal,
  getGoals,
} from "../../services/goals.service";
import { transactionKeys } from "../../utils";

const month = new Date().getMonth() + 1;

export const useGetGoals = () => {
  return useQuery({
    queryKey: ["goals"],
    queryFn: getGoals,
    retry: 3,
    staleTime: 5 * 60 * 1000,
  });
};

export const useGetGoal = (id) => {
  return useQuery({
    queryKey: ["goals", id],
    queryFn: () => getGoal(id),
    enabled: !!id,
  });
};

const monthly = transactionKeys.monthly(month);
const financial = transactionKeys.financial(month);
export const useAddGoal = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addGoal,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["goals"],
      });
    },

    onError: (error) => {
      console.error(error);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: monthly });
      queryClient.invalidateQueries({ queryKey: financial });
    },
  });
};

export const useEditGoal = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editGoal,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["goals"],
      });
    },
  });
};

export const useDeleteGoal = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteGoal,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["goals"],
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: monthly });
      queryClient.invalidateQueries({ queryKey: financial });
    },
  });
};
