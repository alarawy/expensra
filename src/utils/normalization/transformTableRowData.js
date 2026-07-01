import { format } from "date-fns";

const transformTableRowData = (item, variant) => {
  if (variant === "budget") {
    return {
      budgetName: item.category.name,
      spent: item.total_spent,
      limitAmount: item.limit_amount,
      startDate: format(item.start_date, "dd/MM/yyyy"),
      endDate: format(item.end_date, "dd/MM/yyyy"),
      id: item.id,
    };
  }
  if (variant === "goals") {
    return {
      goalName: item.goal_name,
      targetAmount: item.target_amount,
      savedAmount: item.saved_amount,
      deadline: format(item.deadline, "dd/MM/yyyy"),
      id: item.id,
    };
  }

  const baseTransaction = {
    category: item.category?.name,
    category_id: item.category_id,
    amount: item.amount,
    date: format(item.transaction_date, "dd/MM/yyyy"),
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

export default transformTableRowData;
