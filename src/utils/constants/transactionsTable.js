export const TABLE_HEADERS = {
  transactions: ["type", "category", "amount", "date", "description"],
  income: ["source", "amount", "date", "description", "actions"],
  budget: ["category", "limit", "spent", "status"],
  expense: ["category", "amount", "date", "description", "actions"],
};

export const TABLE_TITLES = {
  transactions: "transactions.allTransactions",
  income: "income.allIncomeRecords",
  budget: "budget.currentBudgets",
  expense: "expenses.allExpenseRecords",
};