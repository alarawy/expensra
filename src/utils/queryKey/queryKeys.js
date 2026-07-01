export const transactionKeys = {
  all: ["transactions"],

  detail: (id) => ["transactions", id],

  monthly: (month) => ["monthly-transactions", month],
};
