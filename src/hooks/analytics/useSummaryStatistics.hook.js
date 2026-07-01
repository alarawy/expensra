import { useMemo } from "react";
import { useGetSummaryAnalytics } from "./analytics.hooks";
import { calculateAverage, calculateComparison, calculateHighest, calculateInsights } from "../../utils";


export const useSummaryStatistics = () => {
  const { data, isPending, isError } = useGetSummaryAnalytics();

  const statistics = useMemo(() => {
    if (!data.length) {
      return {
        average: {
          income: 0,
          expenses: 0,
          savings: 0,
        },
        highest: {
          income: 0,
          expenses: 0,
          savings: 0,
        },
        comparison: {
          income: {
            percentage: 0,
            trend: "same",
          },
          expenses: {
            percentage: 0,
            trend: "same",
          },
        },
        insights: {
          bestSavingMonth: "",
          highestExpenseCategory: "",
        },
      };
    }

    return {
      average: calculateAverage(data),
      highest: calculateHighest(data),
      comparison: calculateComparison(data),
      insights: calculateInsights(data),
    };
  }, [data]);

  return {
    data: statistics,
    isPending,
    isError,
  };
};
