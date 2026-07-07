export const transactionKeys = {
  all: ["transactions"],

  detail: (id) => ["transactions", id],

  monthly: (month) => ["monthly-transactions", { month }],

  financial: (month) => ["financial-summary", { month }],
  
  budgets: ["budgets"]
};
