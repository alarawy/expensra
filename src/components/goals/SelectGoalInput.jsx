import { useState } from "react";
import { useGetGoals, useOutsideClick } from "../../hooks";
import { GoalsList } from "./index";
import { Input } from "../common";
import { useSearchParams } from "react-router-dom";

const SelectGoalInput = ({ value, onSelect, error }) => {
  const [, setSearchParams] = useSearchParams();
  const { data } = useGetGoals();
  const [isFocused, setIsFocused] = useState(false);

  const ref = useOutsideClick(() => setIsFocused(false));

  const handleSelect = (goal) => {
    onSelect(goal.goal_name);
    setSearchParams({ goalId: goal.id });
    setIsFocused(false);
  };

  return (
    <div ref={ref} className="relative my-3">
      <Input
        id="goal"
        i18nKey="goals.selectGoal"
        value={value || ""}
        error={error}
        readOnly
        onClick={() => setIsFocused(true)}
        onFocus={() => setIsFocused(true)}
        className="cursor-pointer flex-row-reverse"
      />

      {isFocused && (
        <GoalsList goals={data?.goals || []} handleSelect={handleSelect} />
      )}
    </div>
  );
};

export default SelectGoalInput;
