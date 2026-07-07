import { Controller } from "react-hook-form";
import { useTransactionForm } from "../../../hooks";
import {
  DatePickerInput,
  FormButton,
  Input,
  Overlay,
  SelectInput,
  Text,
} from "../../common/index";
import {
  FaPenToSquare,
  FaXmark,
  MdAttachMoney,
} from "../../../assets/icons/icons";

const TransactionsForm = ({ variant, handleOpenDialog }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isDirty },
    onSubmit,
    onCancel,
    isEdit,
    isAdding,
    isEditing,
  } = useTransactionForm(variant, handleOpenDialog);

  return (
    <Overlay onClick={onCancel}>
      <div className="flex-center h-full w-full px-2">
        <div
          className="text-primary bg-primary border-default relative z-50 m-auto max-w-lg flex-1 rounded-2xl p-5 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className="icons-scale absolute top-5 text-2xl ltr:right-5 rtl:left-5"
            onClick={onCancel}
          >
            <FaXmark />
          </button>

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
              rules={{
                required:
                  variant === "income"
                    ? "income.selectSource"
                    : "expenses.selectCategory",
              }}
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
                validate: (value) =>
                  Number(value) > 0 || "transactions.amountMin",
              }}
              error={errors?.amount}
            >
              <MdAttachMoney />
            </Input>

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
            >
              <FaPenToSquare size={18} />
            </Input>

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
      </div>
    </Overlay>
  );
};

export default TransactionsForm;
