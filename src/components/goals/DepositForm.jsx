import { FaPenToSquare, MdAttachMoney } from "../../assets/icons/icons";
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
        i18nKey="goals.depositAmount"
        id="amount"
        placeholderKey="goals.depositPlaceholder"
        rules={{ required: "auth.requiredField" }}
        error={errors.amount}
        register={register}
      >
        <MdAttachMoney />
      </Input>
      <Input
        i18nKey="goals.notes"
        id="notes"
        placeholderKey="goals.notesPlaceholder"
        rules={{}}
        register={register}
      >
        <FaPenToSquare size={17} />
      </Input>

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
