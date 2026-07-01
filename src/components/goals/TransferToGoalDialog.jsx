import { FaXmark } from "../../assets/icons/icons";
import { Controller } from "react-hook-form";
import { FormButton, Input, Overlay, ProgressBar, Text } from "../common";
import { SelectGoalInput } from "./index";
import { useGetGoal, useMonthlySummary, useTransferToGoal } from "../../hooks";
import { formatPrice } from "../../utils";

const TransferToGoalDialog = ({ openDialog, handleOpenDialog }) => {
  const { totalBalance } = useMonthlySummary();
  const { goalId, register, handleSubmit, control, errors, onSubmit, close } =
    useTransferToGoal(handleOpenDialog);
  const { data } = useGetGoal(goalId);
  const current = data?.goal.saved_amount || 0;
  const target = data?.goal.target_amount || 0;
  const percentage = (current / target) * 100;

  if (!openDialog) return null;
  return (
    <Overlay onClick={close}>
      <div className="flex-center h-full w-full px-2">
        <div
          className="text-primary bg-primary border-default relative z-50 m-auto max-w-lg flex-1 rounded-2xl p-5 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <Text
            tagElement="h2"
            i18nKey="goals.addMoneyTitle"
            className="py-4 text-center text-2xl font-semibold"
          />

          <button
            type="button"
            className="icons-scale absolute top-5 text-2xl ltr:right-5 rtl:left-5"
            onClick={close}
          >
            <FaXmark />
          </button>

          <Text
            tagElement="h5"
            i18nKey="goals.remainingBalance"
            className="font-bold py-3 text-secondary"
          >
            {" "}
            {formatPrice(totalBalance)}
          </Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="goal"
              control={control}
              rules={{ required: "auth.requiredField" }}
              render={({ field }) => (
                <SelectGoalInput
                  value={field.value}
                  onSelect={field.onChange}
                  error={errors.goal}
                />
              )}
            />

            <div className="flex-between text-secondary mt-5">
              <Text tagElement="h5" i18nKey="goals.savingProgressTitle" />
              <div className="flex-end pt-1 text-sm">
                <strong className="text-primary ml-1 px-1">
                  {formatPrice(current)}
                </strong>
                <span> / </span>
                <span className="px-1"> {formatPrice(target)}</span>
              </div>
            </div>
            <ProgressBar
              percentage={percentage}
              variant="goals"
              className="mb-5"
            />

            <Input
              id="amount"
              register={register}
              rules={{ required: "auth.requiredField" }}
              i18nKey="transactions.amount"
              error={errors.amount}
            />

            <div className="flex-between">
              <FormButton
                type="button"
                i18nKey="common.cancel"
                className="mt-5 bg-transparent text-(--accent) hover:font-semibold"
                onClick={close}
              />

              <FormButton type="submit" i18nKey="common.add" className="mt-5" />
            </div>
          </form>
        </div>
      </div>
    </Overlay>
  );
};

export default TransferToGoalDialog;
