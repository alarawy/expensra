import { Controller } from "react-hook-form";

import { DatePickerInput, Input, SelectInput, FormButton } from "../common";
import { useAddBudgetForm } from "../../hooks";

const AddBudgetForm = () => {
  const { form, isAdding, isEditing, isEdit, onCancel, onSubmit } =
    useAddBudgetForm();
  const {
    control,
    register,
    formState: { errors, isDirty },
  } = form;

  return (
    <div className="flex-center text-primary bg-primary border-default m-0 h-full w-full rounded-2xl p-5 shadow-2xl">
      <div className="max-w-lg flex-1 py-4">
        <form onSubmit={onSubmit}>
          <Input
            id="category_name"
            register={register}
            i18nKey="budget.title"
            placeholderKey="transactions.categoryPlaceholder"
            error={errors?.category_name}

          />
          <Input
            id="limit_amount"
            register={register}
            i18nKey="transactions.limit"
            placeholderKey="transactions.amountPlaceholder"
            error={errors?.limit_amount}
            rules={{
              required: "auth.requiredField",
              min: { value: 1, message: "expenses.amountMin" },
            }}
          />

          <Controller
            control={control}
            name="start_date"
            rules={{ required: "dates.selectDate" }}
            render={({ field }) => (
              <DatePickerInput
                i18nKey="dates.startDate"
                value={field.value}
                onChange={field.onChange}
                disableNavigation={false}
                error={errors?.start_date}
              />
            )}
          />

          <Controller
            control={control}
            name="end_date"
            rules={{ required: "dates.selectDate" }}
            render={({ field }) => (
              <DatePickerInput
                i18nKey="dates.endDate"
                value={field.value}
                onChange={field.onChange}
                disableNavigation={false}
                error={errors?.end_date}
              />
            )}
          />

          <div className="flex-between mt-6">
            {(isDirty || isEdit) && (
              <FormButton
                type="button"
                i18nKey="common.cancel"
                className="bg-transparent text-(--accent) hover:font-semibold"
                onClick={onCancel}
              />
            )}

            <FormButton
              type="submit"
              i18nKey={isEdit ? "common.edit" : "common.addBudget"}
              isPending={isAdding || isEditing}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBudgetForm;
