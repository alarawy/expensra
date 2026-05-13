import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";
import {
    useAddTransaction,
    useEditTransaction,
    useGetTransaction,
} from "./transactions.hooks";
import { TRANSACTION_FORM_DEFAULTS } from "../../utils/constants";
import { showToast } from "../../utils";


export const useTransactionForm = (variant) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const transactionId = searchParams.get("transactionId");
    const isEdit = !!transactionId;

    const { t } = useTranslation();
    const queryClient = useQueryClient();

    const { mutate: addTransaction, isPending: isAdding } = useAddTransaction();
    const { mutate: editTransaction, isPending: isEditing } = useEditTransaction();
    const { data: getTransaction } = useGetTransaction(transactionId, {
        enabled: isEdit,
    });

    const form = useForm({
        defaultValues: {
            ...TRANSACTION_FORM_DEFAULTS,
            transaction_type: variant,
        },
    });

    const { reset } = form;

    const onCancel = () => {
        setSearchParams({});
        queryClient.removeQueries({
            queryKey: ["transaction", transactionId],
        });
        reset({
            ...TRANSACTION_FORM_DEFAULTS,
            transaction_type: variant,
        });
    };

    const onSubmit = (transaction) => {
        const date = new Date(transaction.transaction_date);
        const now = new Date();

        date.setHours(
            now.getHours(),
            now.getMinutes(),
            now.getSeconds()
        );
        const newData = {
            ...transaction,
            force_save: "",
            transaction_type: variant,
            transaction_date: transaction.transaction_date
                ? format(date, "yyyy-MM-dd'T'HH:mm:ss")
                : "",
        };

        if (isEdit) {
            editTransaction(
                { id: transactionId, data: newData },
                {
                    onSuccess: () => {
                        showToast("transactions.editTransactionSuccess", "success", t);
                    },
                    onSettled: onCancel,
                }
            );
        } else {
            addTransaction(newData, {
                onSuccess: () => {
                    showToast("transactions.addTransactionSuccess", "success", t);
                    reset();
                },
                onError: () => {
                    showToast("transactions.addTransactionError", "error", t);
                },
            });
        }
    };

    useEffect(() => {
        if (!getTransaction || !isEdit) return;

        reset({
            transaction_type: getTransaction.transaction_type,
            category: getTransaction.category.name,
            amount: getTransaction.amount,
            notes: getTransaction.notes,
            transaction_date: getTransaction.transaction_date
                ? new Date(getTransaction.transaction_date)
                : null,
        });
    }, [getTransaction, isEdit, reset]);

    return {
        ...form,
        onSubmit,
        onCancel,
        isEdit,
        isAdding,
        isEditing,
    };
};