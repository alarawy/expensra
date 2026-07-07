import { format } from "date-fns";
import { ar, enUS } from "date-fns/locale";

export const transformTableRowData = (item, variant, language) => {
    const locale = language === "ar" ? ar : enUS;

  if (variant === "budget") {
    return {
      budgetName: item.category.name,
      spent: item.total_spent,
      limitAmount: item.limit_amount,
      startDate: item.start_date,
      endDate: item.end_date,
      id: item.id,
    };
  }
  if (variant === "goals") {
    return {
      goalName: item.goal_name,
      targetAmount: item.target_amount,
      savedAmount: item.saved_amount,
      deadline: format(item.deadline, "dd MMM, yyyy", {locale}),
      id: item.id,
    };
  }

  const baseTransaction = {
    category: item.category?.name,
    category_id: item.category_id,
    amount: item.amount,
    date: format(item.transaction_date, "dd MMM, yyyy", {locale}),
    description: item.notes,
  };

  if (variant === "transactions") {
    return {
      type: item.transaction_type,
      ...baseTransaction,
    };
  }

  return baseTransaction;
};

