import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addGoal,
  deleteGoal,
  editGoal,
  getGoal,
  getGoals,
} from "../../services/goals.service";

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
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      queryClient.invalidateQueries({ queryKey: ["financialSummary"] });
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
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      queryClient.invalidateQueries({ queryKey: ["financialSummary"] });
    },
  });
};
