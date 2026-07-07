const EMPTY_MESSAGES = {
  noData: "transactions.startByAddingTransaction",
  noResults: "transactions.noSearchResults",
  variants: {
    transactions: "transactions.noTransactionsDescription",
    income: "income.noIncomeDescription",
    expense: "expenses.noExpensesDescription",
    budget: "budget.noBudgetDescription",
    goals: "goals.noGoalsDescription",
  },
};

export const getEmptyMessage = ({ hasData, isSearching, variant, type }) => {
  if (hasData) return null;

  if (isSearching) {
    return EMPTY_MESSAGES.noResults;
  }

  if (variant === "transactions") {
    switch (type) {
      case "income":
        return EMPTY_MESSAGES.variants.income;
      case "expense":
        return EMPTY_MESSAGES.variants.expense;
      default:
        return EMPTY_MESSAGES.variants.transactions;
    }
  }

  return (
    EMPTY_MESSAGES.variants[variant] || EMPTY_MESSAGES.variants.transactions
  );
};
