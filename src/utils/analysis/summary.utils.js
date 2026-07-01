// export const calculateAverage = (data) => {
//   if (!data?.length) {
//     return {
//       income: 0,
//       expenses: 0,
//       savings: 0,
//     };
//   }

//   return {
//     income:
//       data.reduce((sum, item) => sum + Number(item.income), 0) / data.length,
//     expenses:
//       data.reduce((sum, item) => sum + Number(item.expenses), 0) / data.length,
//     savings:
//       data.reduce((sum, item) => sum + Number(item.savings), 0) / data.length,
//   };
// };

export const calculateAverage = (data) => {
  const validData = data.filter((item) => item.income > 0 || item.expenses > 0);

  if (!validData.length) {
    return {
      income: 0,
      expenses: 0,
      savings: 0,
    };
  }

  const len = validData.length;

  return {
    income: validData.reduce((sum, i) => sum + Number(i.income), 0) / len,

    expenses: validData.reduce((sum, i) => sum + Number(i.expenses), 0) / len,

    savings: validData.reduce((sum, i) => sum + Number(i.savings), 0) / len,
  };
};

export const calculateHighest = (data) => {
  if (!data?.length) {
    return {
      income: 0,
      expenses: 0,
      savings: 0,
    };
  }

  return {
    income: Math.max(...data.map((item) => Number(item.income))),
    expenses: Math.max(...data.map((item) => Number(item.expenses))),
    savings: Math.max(...data.map((item) => Number(item.savings))),
  };
};

export const calculateComparison = (data) => {
  if (data.length < 2) {
    return {
      income: {
        percentage: 0,
        trend: "same",
      },
      expenses: {
        percentage: 0,
        trend: "same",
      },
    };
  }

  const current = data[data.length - 1];
  const previousMonths = data.slice(0, -1);

  const averageIncome =
    previousMonths.reduce((sum, item) => sum + Number(item.income), 0) /
    previousMonths.length;

  const averageExpenses =
    previousMonths.reduce((sum, item) => sum + Number(item.expenses), 0) /
    previousMonths.length;

  const getPercentage = (currentValue, averageValue) => {
    if (averageValue === 0) {
      return currentValue > 0 ? 100 : 0;
    }

    return Number(
      (((currentValue - averageValue) / averageValue) * 100).toFixed(1),
    );
  };

  const incomePercentage = getPercentage(Number(current.income), averageIncome);

  const expensesPercentage = getPercentage(
    Number(current.expenses),
    averageExpenses,
  );

  return {
    income: {
      percentage: Math.abs(incomePercentage),
      trend:
        incomePercentage > 0
          ? "increase"
          : incomePercentage < 0
            ? "decrease"
            : "same",
    },

    expenses: {
      percentage: Math.abs(expensesPercentage),
      trend:
        expensesPercentage > 0
          ? "increase"
          : expensesPercentage < 0
            ? "decrease"
            : "same",
    },
  };
};

// export const calculateInsights = (data) => {
//   const bestSavingMonth = data.reduce((prev, current) =>
//     current.savings > prev.savings ? current : prev,
//   ).month;

//   const expenseCategories = {};
//   const incomeCategories = {};

//   data.forEach((month) => {
//     month.categoryExpenses?.forEach((category) => {
//       expenseCategories[category.category_name] =
//         (expenseCategories[category.category_name] || 0) +
//         Number(category.expenses);
//     });

//     month.categoryIncome?.forEach((category) => {
//       incomeCategories[category.category_name] =
//         (incomeCategories[category.category_name] || 0) +
//         Number(category.total_incomes);
//     });
//   });

//   const highestExpenseCategory = Object.entries(expenseCategories).reduce(
//     (max, current) => (current[1] > max[1] ? current : max),
//     ["", 0],
//   )[0];

//   const highestIncomeCategory = Object.entries(incomeCategories).reduce(
//     (max, current) => (current[1] > max[1] ? current : max),
//     ["", 0],
//   )[0];

//   return {
//     bestSavingMonth,
//     highestExpenseCategory,
//     highestIncomeCategory,
//   };
// };
export const calculateInsights = (data) => {
  if (!data?.length) {
    return {
      bestSavingMonth: null,
      highestExpenseCategory: null,
      highestIncomeCategory: null,
    };
  }

  const bestSavingMonth = data.reduce((best, current) =>
    Number(current.savings) > Number(best.savings) ? current : best,
  ).month;

  const expenseCategories = {};
  const incomeCategories = {};

  data.forEach((month) => {
    month.categoryExpenses?.forEach((category) => {
      expenseCategories[category.category_name] =
        (expenseCategories[category.category_name] || 0) +
        Number(category.expenses);
    });

    month.categoryIncome?.forEach((category) => {
      incomeCategories[category.category_name] =
        (incomeCategories[category.category_name] || 0) +
        Number(category.total_incomes);
    });
  });

  const highestExpenseCategory =
    Object.entries(expenseCategories).length > 0
      ? Object.entries(expenseCategories).reduce((max, current) =>
          current[1] > max[1] ? current : max,
        )[0]
      : null;

  const highestIncomeCategory =
    Object.entries(incomeCategories).length > 0
      ? Object.entries(incomeCategories).reduce((max, current) =>
          current[1] > max[1] ? current : max,
        )[0]
      : null;

  return {
    bestSavingMonth,
    highestExpenseCategory,
    highestIncomeCategory,
  };
};
