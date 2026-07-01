import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getAllTransactions,
  addTransaction,
  editTransaction,
  deleteTransaction,
  GetTransaction,
  getMonthlyTransactions,
} from "../../services/transactions.service";

import { transactionKeys } from "../../utils";

export const useGetAllTransactions = () => {
  return useQuery({
    queryKey: transactionKeys.all,
    queryFn: getAllTransactions,
    retry: 2,
    staleTime: 5 * 60 * 1000,
  });
};

export const useGetMonthlyTransactions = (month) => {
  return useQuery({
    queryKey: transactionKeys.monthly(month),
    queryFn: () => getMonthlyTransactions(month),
    enabled: !!month,
    staleTime: 5 * 60 * 1000,
    retry: false
  });
};

export const useGetTransaction = (id) => {
  return useQuery({
    queryKey: transactionKeys.detail(id),
    queryFn: () => GetTransaction(id),
    enabled: !!id,
  });
};

export const useAddTransaction = (month) => {
  const queryClient = useQueryClient();
  const KEY = transactionKeys.monthly(month);

  return useMutation({
    mutationFn: addTransaction,

    onMutate: async (newTransaction) => {
      await queryClient.cancelQueries({ queryKey: KEY });

      const previousData = queryClient.getQueryData(KEY);

      const optimisticTransaction = {
        ...newTransaction,
        id: crypto.randomUUID(),
      };

      queryClient.setQueryData(KEY, (old) => {
        if (!old?.transactions) return old;

        return {
          ...old,
          transactions: [optimisticTransaction, ...old.transactions],
        };
      });

      return { previousData };
    },

    onError: (_err, _vars, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(KEY, context.previousData);
      }
    },

    onSuccess: () => {
      // ❌ no refetch for transactions → avoids lag
      queryClient.invalidateQueries({
        queryKey: transactionKeys.financialSummary,
      });
    },
  });
};

export const useEditTransaction = (month) => {
  const queryClient = useQueryClient();
  const KEY = transactionKeys.monthly(month);

  return useMutation({
    mutationFn: editTransaction,

    onMutate: async (updated) => {
      await queryClient.cancelQueries({ queryKey: KEY });

      const previousData = queryClient.getQueryData(KEY);

      queryClient.setQueryData(KEY, (old) => {
        if (!old?.transactions) return old;

        return {
          ...old,
          transactions: old.transactions.map((t) =>
            t.id === updated.id ? { ...t, ...updated } : t,
          ),
        };
      });

      return { previousData };
    },

    onError: (_err, _vars, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(KEY, context.previousData);
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: transactionKeys.financialSummary,
      });
    },
  });
};

export const useDeleteTransaction = (month) => {
  const queryClient = useQueryClient();
  const KEY = transactionKeys.monthly(month);

  return useMutation({
    mutationFn: deleteTransaction,

    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: KEY });

      const previousData = queryClient.getQueryData(KEY);

      queryClient.setQueryData(KEY, (old) => {
        if (!old?.transactions) return old;

        return {
          ...old,
          transactions: old.transactions.filter((t) => t.id !== id),
        };
      });

      return { previousData };
    },

    onError: (_err, _vars, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(KEY, context.previousData);
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: transactionKeys.financialSummary,
      });
    },
  });
};
