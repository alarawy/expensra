import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDeposit, useGetGoal } from "../index";
import { formatPrice, showToast } from "../../utils";

export const useDepositDialog = (handleOpenDialog) => {
  const { t } = useTranslation();
  const { mutate: addDeposit } = useDeposit();

  const [searchParams, setSearchParams] = useSearchParams();
  const goalId = searchParams.get("goalId");

  const { data: goal } = useGetGoal(Number(goalId));

  const form = useForm({
    defaultValues: {
      amount: "",
    },
  });

  const onSubmit = (data) => {
    addDeposit(
      { id: goalId, data },
      {
        onSuccess: () => {
          showToast("goals.goalDepositSuccess", "success", t, {
            amount: formatPrice(data.amount),
          });
          handleOpenDialog(false);
        },
        onError: () => {
          showToast("goals.moneyAddFailed", "error", t);
        },
        onSettled: () => {
          setSearchParams({});
        },
      },
    );
  };

  const onCancel = () => {
    setSearchParams({});
    handleOpenDialog(false);
  };

  return {
    goal,
    onSubmit,
    onCancel,
    form,
  };
};
