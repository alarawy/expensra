import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getAllTransactions, addTransaction, editTransaction, deleteTransaction, GetTransaction } from "../../services/transactions.service";

export const useGetAllTransactions = () => {
    return useQuery({
        queryKey: ["transactions"],
        queryFn: getAllTransactions,
        retry: 3,
        staleTime: 5 * 60 * 1000,
    })
}

export const useGetTransaction = (id) => {
    return useQuery({
        queryKey: ["transactions", id],
        queryFn: () => GetTransaction(id),
        enabled: !!id,
    })
}

export const useAddTransaction = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addTransaction,
        onMutate: async (newTransaction) => {
            await queryClient.cancelQueries({ queryKey: ["transactions"] });

            const previousTransactions = queryClient.getQueryData(["transactions"]);

            const tempTransaction = {
                ...newTransaction,
                id: Date.now()
            };

            queryClient.setQueryData(["transactions"], (oldData = []) => {
                return [tempTransaction, ...oldData];
            });

            return { previousTransactions };
        },

        onError: (err, newData, context) => {
            queryClient.setQueryData(
                ["transactions"],
                context.previousTransactions
            );
        },

        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["transactions"] });
            queryClient.invalidateQueries({ queryKey: ["categories"] });
            queryClient.invalidateQueries({ queryKey: ["financialSummary"] });
        },
    });
};

export const useEditTransaction = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: editTransaction,

        onMutate: async (updatedTransaction) => {
            await queryClient.cancelQueries({ queryKey: ["transactions"] });

            const previousTransactions = queryClient.getQueryData(["transactions"]);

            queryClient.setQueryData(["transactions"], (oldData) => {
                return oldData.map((item) =>
                    item.id === updatedTransaction.id
                        ? { ...item, ...updatedTransaction }
                        : item
                );
            });

            return { previousTransactions };
        },

        onError: (err, newData, context) => {
            queryClient.setQueryData(
                ["transactions"],
                context.previousTransactions
            );
        },

        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["transactions"] });
            queryClient.invalidateQueries({ queryKey: ["categories"] });
            queryClient.invalidateQueries({ queryKey: ["financialSummary"] });
        },
    });
};

export const useDeleteTransaction = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteTransaction,

        onMutate: async (id) => {
            await queryClient.cancelQueries({ queryKey: ["transactions"] });

            const previousTransactions = queryClient.getQueryData(["transactions"]);

            queryClient.setQueryData(["transactions"], (oldData) => {
                return oldData.filter((item) => item.id !== id);
            });

            return { previousTransactions };
        },

        onError: (err, id, context) => {
            queryClient.setQueryData(
                ["transactions"],
                context.previousTransactions
            );
        },

        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["transactions"] });
            queryClient.invalidateQueries({ queryKey: ["categories"] });
            queryClient.invalidateQueries({ queryKey: ["financialSummary"] });
        },
    });
};