import { Controller } from "react-hook-form";
import { useTransactionForm } from "../../../hooks";
import {
  DatePickerInput,
  FormButton,
  Input,
  SelectInput,
  Text,
} from "../../common/index";

const TransactionsForm = ({ variant }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isDirty },
    onSubmit,
    onCancel,
    isEdit,
    isAdding,
    isEditing
  } = useTransactionForm(variant);

  return (
    <div className="bg-primary m-0 rounded-md p-5 lg:p-8">
      <Text
        tagElement="h4"
        i18nKey={
          variant === "income"
            ? "income.addNewIncome"
            : "expenses.addNewExpense"
        }
        className="text-accent text-xl font-semibold"
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="m-auto mt-5 w-full lg:w-md"
      >
        <Controller
          name="category"
          control={control}
          rules={{ required: variant === "income" ? "income.selectSource" : "expenses.selectCategory"}}
          render={({ field }) => (
            <SelectInput
              value={field.value}
              onSelect={field.onChange}
              error={errors?.category}
              variant={variant}
            />
          )}
        />

        <Input
          id="amount"
          register={register}
          i18nKey="transactions.amount"
          placeholderKey="transactions.amountPlaceholder"
          rules={{
            required: "auth.requiredField",
            validate: (value) => Number(value) > 0 || "transactions.amountMin",
          }}
          error={errors?.amount}
        />

        <Controller
          control={control}
          name="transaction_date"
          rules={{ required: "dates.selectDate" }}
          render={({ field }) => (
            <DatePickerInput
              value={field.value}
              onChange={field.onChange}
              error={errors?.transaction_date}
            />
          )}
        />

        <Input
          id="notes"
          register={register}
          i18nKey="transactions.description"
          placeholderKey="transactions.descriptionPlaceholder"
          rules={{}}
        />

        <div className="flex-end mt-10 gap-5">
          {(isEdit || isDirty) && (
            <FormButton
              type="button"
              i18nKey="common.cancel"
              className="text-accent bg-transparent"
              onClick={onCancel}
            />
          )}

          <FormButton
            i18nKey={
              isEdit
                ? "common.edit"
                : variant === "income"
                  ? "income.addIncome"
                  : "expenses.addExpense"
            }
            isPending={isAdding || isEditing}
          />
        </div>
      </form>
    </div>
  );
};

export default TransactionsForm;
