import { FormButton, Input } from "../common";

const DepositForm = ({
  register,
  errors,
  onSubmit,
  onCancel,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="py-5">
      <Input
        i18nKey="goals.amountToAdd"
        id="amount"
        placeholderKey="goals.amountPlaceholder"
        rules={{ required: "auth.requiredField" }}
        error={errors.amount}
        register={register}
      />
      <Input
        i18nKey="goals.notes"
        id="notes"
        placeholderKey="goals.notesPlaceholder"
        rules={{}}
        register={register}
      />

      <div className="flex-between pt-5">
        <FormButton
          i18nKey="common.cancel"
          type="button"
          className="mt-5 bg-transparent text-(--accent) hover:font-semibold"
          onClick={onCancel}
        />

        <FormButton i18nKey="common.add" className="mt-5" />
      </div>
    </form>
  );
};

export default DepositForm;
