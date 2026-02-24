import { useForm, Controller } from "react-hook-form";
import { DatePickerInput, FormButton, Input, Text } from "../index";

import { SelectInput } from "../index";

const TransactionsForm = ({ variant }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      category: "",
      amount: "",
      description: "",
      date: null,
    },
  });

  const isDateRange = variant === "income";

  const onSubmit = (expense) => {
    console.log("Submitted expense:", expense);
    reset();
  };
  return (
    <div className="bg-primary m-0 mt-10 rounded-md p-5 lg:p-8">
      <Text
        tagElement="h4"
        i18nKey={`${variant === "income" ? "income.addNewIncome" : "expenses.addNewExpense"}`}
        className="text-accent text-xl font-semibold"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="m-auto mt-5 w-full lg:w-md"
      >
        <Controller
          name="category"
          control={control}
          rules={{ required: "expenses.selectCategory" }}
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
          error={errors?.amount}
          rules={{
            required: "auth.requiredField",
            min: { value: 1, message: "expenses.amountMin" },
          }}
        />

        <Controller
          control={control}
          name="date"
          rules={{ required: "auth.requiredField" }}
          render={({ field }) => (
            <DatePickerInput
              dateRange={isDateRange}
              value={field.value}
              onChange={field.onChange}
              error={errors?.date}
            />
          )}
        />

        <Input
          id="description"
          register={register}
          i18nKey="transactions.description"
          placeholderKey="transactions.descriptionPlaceholder"
          error={errors?.description}
          rules={{}}
        />

        <FormButton
          i18nKey={`${variant === "income" ? "income.addIncome" : "expenses.addExpense"}`}
        />
      </form>
    </div>
  );
};

export default TransactionsForm;
