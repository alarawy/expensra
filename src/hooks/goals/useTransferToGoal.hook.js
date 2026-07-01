import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { useRemainingBalance } from "./useRemainingBalance.hooks";

export const useTransferToGoal = (handleOpenDialog) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const goalId = searchParams.get("goalId");

  const { mutate } = useRemainingBalance();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const close = () => {
    setSearchParams({});
    handleOpenDialog(false);
  };
  const onSubmit = (data) => {
    const formattedData = {
      //   ...data,
      amount: data.amount,
      action: "to_goal",
      goal_id: Number(goalId),
    };
    mutate(formattedData);
    close();
  };

  return {
    goalId,
    register,
    handleSubmit,
    control,
    errors,
    onSubmit,
    close,
  };
};
