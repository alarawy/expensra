import { Controller } from "react-hook-form";
import { DatePickerInput, FormButton, Input, Overlay } from "../common";
import { FaXmark } from "../../assets/icons/icons";
import { useAddGoalsForm } from "../../hooks/goals/useAddGoalsForm.hook";


const AddGoalsForm = ({ openDialog, handleOpenDialog }) => {
  const {
    form,
    goalId,
    onSubmit,
    close,
  } = useAddGoalsForm(handleOpenDialog);

  const {
    register,
    control,
    formState: { errors },
  } = form;

  if (!openDialog) return null;

  return (
    <Overlay onClick={close}>
      <div className="flex-center h-full w-full px-2">
        <div
          className="text-primary bg-primary border-default relative z-50 m-auto max-w-lg flex-1 rounded-2xl p-5 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <form onSubmit={onSubmit}>

            <button
              type="button"
              className="icons-scale absolute top-5 text-2xl ltr:right-5 rtl:left-5"
              onClick={close}
            >
              <FaXmark />
            </button>

            <Input
              id="goal_name"
              register={register}
              i18nKey="transactions.goalName"
              error={errors?.goal_name}
              rules={{ required: "auth.requiredField" }}
            />

            <Input
              id="target_amount"
              register={register}
              i18nKey="transactions.limit"
              error={errors?.target_amount}
              rules={{ required: "auth.requiredField" }}
            />

            <Input
              id="saved_amount"
              register={register}
              disabled={goalId}
              rules={{}}
              i18nKey="transactions.saved"
              error={errors?.saved_amount}
            />

            <Controller
              control={control}
              name="deadline"
              rules={{ required: "dates.selectDate" }}
              render={({ field }) => (
                <DatePickerInput
                  i18nKey="transactions.deadline"
                  disableNavigation={false}
                  value={field.value}
                  onChange={field.onChange}
                  error={errors?.deadline}
                />
              )}
            />

            <div className="flex-between">
              <FormButton
                i18nKey="common.cancel"
                type="button"
                className="mt-5 bg-transparent text-(--accent) hover:font-semibold"
                onClick={close}
              />

              <FormButton
                i18nKey={goalId ? "common.edit" : "common.add"}
                className="mt-5"
              />
            </div>

          </form>
        </div>
      </div>
    </Overlay>
  );
};

export default AddGoalsForm;