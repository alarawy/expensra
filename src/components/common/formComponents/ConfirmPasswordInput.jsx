import { CiLock } from "../../../assets/icons/icons";
import { Input } from "../index";

const ConfirmPasswordInput = ({ register, error, getValues }) => {
  return (
    <Input
      i18nKey="auth.confirmPassword"
      id="confirmPassword"
      type="password"
      register={register}
      rules={{
        required: "auth.requiredField",
        validate: (value) =>
          value === getValues().password || "auth.invalidPasswordConfirmation",
      }}
      error={error}
    >
      <CiLock />
    </Input>
  );
};

export default ConfirmPasswordInput;
