export const TABLE_HEADERS = {
  transactions: ["type", "category", "amount", "date", "description"],
  income: ["source", "amount", "date", "description", "actions"],
  budget: ["category", "spent", "limit","startDate", "endDate", "status", "actions"],
  goals: ["category", "saved", "target", "deadline", "status", "actions"],
  expense: ["category", "amount", "date", "description", "actions"],
};

export const TABLE_TITLES = {
  transactions: "transactions.allTransactions",
  income: "income.allIncomeRecords",
  budget: "budget.title",
  goals: "goals.title",
  expense: "expenses.allExpenseRecords",
};
