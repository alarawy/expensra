import { useMemo } from "react";
import { useGetGoals } from "./goals.hook";
import { normalizeData } from "../../utils";

export const useGoalsSummary = () => {
  const { data } = useGetGoals();
  const goals = normalizeData(data?.goals);

  const summary = useMemo(
    () =>
      goals.reduce(
        (acc, goal) => ({
          current: acc.current + Number(goal.saved_amount),
          total: acc.total + Number(goal.target_amount),
        }),
        { current: 0, total: 0 },
      ),
    [goals],
  );

  return summary;
};
