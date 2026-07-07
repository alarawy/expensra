import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { transactionKeys } from "../../utils";
import {
  getAllTransactions,
  addTransaction,
  editTransaction,
  deleteTransaction,
  getTransaction,
  getMonthlyTransactions,
} from "../../services/transactions.service";

const month = new Date().getMonth() + 1;

export const useGetAllTransactions = () => {
  return useQuery({
    queryKey: transactionKeys.all,
    queryFn: getAllTransactions,
    retry: 2,
    staleTime: 5 * 60 * 1000,
  });
};

export const useGetMonthlyTransactions = ({ month }) => {
  return useQuery({
    queryKey: transactionKeys.monthly(month),
    queryFn: () => getMonthlyTransactions({ month }),
    enabled: !!month,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });
};

export const useGetTransaction = (id) => {
  return useQuery({
    queryKey: transactionKeys.detail(id),
    queryFn: () => getTransaction(id),
    enabled: !!id,
  });
};

export const useAddTransaction = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addTransaction,
    onMutate: async (newTransaction) => {
      const key = transactionKeys.monthly(month);
      await queryClient.cancelQueries({ queryKey: key });
      const previousData = queryClient.getQueryData(key);
      const optimisticTransaction = {
        ...newTransaction,
        id: crypto.randomUUID(),
      };
      queryClient.setQueryData(key, (old) => ({
        ...old,
        transactions: [optimisticTransaction, ...(old?.transactions ?? [])],
      }));
      return { previousData };
    },
    onError: (err, _vars, context) => {
      console.log(err);
      if (context?.previousData) {
        queryClient.setQueryData(
          transactionKeys.monthly(month),
          context.previousData,
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: transactionKeys.monthly(month),
      });
      queryClient.invalidateQueries({
        queryKey: transactionKeys.financial(month),
      });
      queryClient.invalidateQueries({
        queryKey: transactionKeys.budgets,
      });
      queryClient.invalidateQueries({
        queryKey: transactionKeys.all,
      });
    },
  });
};

export const useEditTransaction = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editTransaction,
    onMutate: async (updated) => {
      const key = transactionKeys.monthly(month);
      await queryClient.cancelQueries({ queryKey: key });
      const previousData = queryClient.getQueryData(key);
      queryClient.setQueryData(key, (old) => ({
        ...old,
        transactions:
          old?.transactions?.map((t) =>
            t.id === updated.id
              ? {
                  ...t,
                  ...updated.data,
                }
              : t,
          ) ?? [],
      }));
      return { previousData };
    },
    onError: (_err, _vars, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(
          transactionKeys.monthly(month),
          context.previousData,
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: transactionKeys.monthly(month),
      });
      queryClient.invalidateQueries({
        queryKey: transactionKeys.financial(month),
      });
      queryClient.invalidateQueries({
        queryKey: transactionKeys.budgets,
      });
      queryClient.invalidateQueries({
        queryKey: transactionKeys.all,
      });
    },
  });
};

export const useDeleteTransaction = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTransaction,
    onMutate: async (id) => {
      const key = transactionKeys.monthly(month);
      await queryClient.cancelQueries({ queryKey: key });
      const previousData = queryClient.getQueryData(key);
      queryClient.setQueryData(key, (old) => ({
        ...old,
        transactions: old?.transactions?.filter((t) => t.id !== id) ?? [],
      }));
      return { previousData };
    },
    onError: (_err, _vars, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(
          transactionKeys.monthly(month),
          context.previousData,
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: transactionKeys.monthly(month),
      });
      queryClient.invalidateQueries({
        queryKey: transactionKeys.financial(month),
      });
      queryClient.invalidateQueries({
        queryKey: transactionKeys.budgets,
      });
      queryClient.invalidateQueries({
        queryKey: transactionKeys.all,
      });
    },
  });
};
