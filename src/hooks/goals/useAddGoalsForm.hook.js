import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useAddGoal, useEditGoal, useGetGoal } from "../../hooks";
import { DEFAULT_GOAL_VALUES, formatGoalPayload, showToast } from "../../utils";

export const useAddGoalsForm = (handleOpenDialog) => {
  const { t } = useTranslation();
  const form = useForm({
    defaultValues: DEFAULT_GOAL_VALUES,
  });

  const { reset, handleSubmit } = form;

  const [searchParams, setSearchParams] = useSearchParams();
  const goalId = searchParams.get("goalId");
  const isEdit = !!goalId;

  const { data } = useGetGoal(Number(goalId));
  const { mutate: addGoal } = useAddGoal();
  const { mutate: editGoal } = useEditGoal();

  useEffect(() => {
    if (data?.goal && isEdit) {
      reset({
        goal_name: data.goal.goal_name || "",
        target_amount: data.goal.target_amount || "",
        saved_amount: data.goal.saved_amount || "",
        deadline: data.goal.deadline || "",
      });
    }
  }, [data, isEdit, reset]);

  const close = () => {
    handleOpenDialog(false);
    setSearchParams({});
    reset(DEFAULT_GOAL_VALUES);
  };

  const onSubmit = (formData) => {
    const formattedData = formatGoalPayload(formData);

    if (!isEdit) {
      addGoal(formattedData, {
        onSuccess: () => {
          showToast("goals.createSuccess", "success", t);
        },
        onError: () => {
          showToast("goals.createError", "error", t);
        },
        onSettled: () => {
          close();
        },
      });
    } else {
      editGoal(
        { id: Number(goalId), data: formattedData },
        {
          onSuccess: () => {
            showToast("goals.updateSuccess", "success", t);
          },
          onError: () => {
            showToast("goals.updateError", "error", t);
          },
          onSettled: () => {
            close();
          },
        },
      );
    }
  };

  return {
    form,
    goalId,
    isEdit,
    onSubmit: handleSubmit(onSubmit),
    close,
  };
};
