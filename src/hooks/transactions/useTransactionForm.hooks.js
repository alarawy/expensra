import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import {
  useAddTransaction,
  useEditTransaction,
  useGetTransaction,
} from "./transactions.hooks";
import { formatDate, showToast, TRANSACTION_FORM_DEFAULTS } from "../../utils";
import { useModal } from "../../context";

export const useTransactionForm = (variant = "expense", handleOpenDialog) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const transactionId = searchParams.get("transactionId");
  const isEdit = !!transactionId;

  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const { mutate: addTransaction, isPending: isAdding } = useAddTransaction();
  const { mutate: editTransaction, isPending: isEditing } =
    useEditTransaction();
  const { data: getTransaction } = useGetTransaction(transactionId, {
    enabled: isEdit,
  });
  const { openModal } = useModal();

  const form = useForm({
    defaultValues: {
      ...TRANSACTION_FORM_DEFAULTS,
      transaction_type: variant,
    },
  });

  const { reset } = form;

  const onCancel = () => {
    setSearchParams({});
    handleOpenDialog(false);
    queryClient.removeQueries({
      queryKey: ["transaction", transactionId],
    });
    reset({
      ...TRANSACTION_FORM_DEFAULTS,
      transaction_type: variant,
    });
  };

  const onSubmit = (transaction) => {
    const formattedDate = formatDate(transaction.transaction_date);
    const newData = {
      ...transaction,
      force_save: false,
      transaction_type: variant,
      transaction_date: transaction.transaction_date ? formattedDate : "",
    };

    if (isEdit) {
      editTransaction(
        { id: transactionId, data: newData },
        {
          onSuccess: () => {
            showToast("transactions.editTransactionSuccess", "success", t);
          },
          onSettled: onCancel,
        },
      );
    } else {
      addTransaction(newData, {
        onSuccess: (res) => {
          console.log(res);
          if (res.status === "budget_warning") {
            openModal('budgetWarning')
            showToast("budget.budgetWarning", "warning", t);
          } else {
            showToast("transactions.addTransactionSuccess", "success", t);
          }
          reset();
          onCancel();
        },
        onError: () => {
          showToast("transactions.expenseExceedsBalance", "error", t);
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
