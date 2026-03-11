import { Controller, useForm } from "react-hook-form";
import { Input, Overlay, SelectInput } from "../common";
import { FormButton, Text } from "../common";
import { FaXmark } from "react-icons/fa6";

const AddCategoryBudget = ({ openDialog, handleOpenDialog }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      amount: "",
      budget: "",
    },
  });

  const onAddCategoryBudget = (data) => {
    console.log(data);
  };

  return (
    <>
      {openDialog && (
        <Overlay onClick={() => handleOpenDialog(false)}>
          <div className="flex-center h-full w-full px-2">
            <div
              className="text-primary bg-primary border-default relative z-50 m-auto max-w-lg flex-1 rounded-2xl p-5 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <form onSubmit={handleSubmit(onAddCategoryBudget)}>
                <button
                  type="button"
                  className="icons-scale absolute top-5 text-2xl ltr:right-5 rtl:left-5"
                  onClick={() => handleOpenDialog(false)}
                >
                  <FaXmark />
                </button>
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
                  name="budget"
                  control={control}
                  rules={{ required: "auth.requiredField" }}
                  render={({ field }) => (
                    <SelectInput
                      value={field.value || ""}
                      onSelect={field.onChange}
                      error={errors?.budget}
                      variant="budget"
                    />
                  )}
                />
                <FormButton i18nKey="common.save" className="mt-5" />
                <FormButton
                  i18nKey="common.cancel"
                  type="cancel"
                  className="mt-5 bg-transparent text-(--accent) hover:font-semibold"
                  onClick={() => handleOpenDialog(false)}
                />
              </form>
            </div>
          </div>
        </Overlay>
      )}
    </>
  );
};

export default AddCategoryBudget;
