import { CiLock } from "../../../assets/icons/icons";
import { Input } from "../index";

const ConfirmPasswordInput = ({
  i18nKey="auth.confirmPassword",
  register,
    matchField="password",
  id = "password_confirmation",
  error,
  getValues,
}) => {
  return (
    <Input
      i18nKey={i18nKey}
      id={id}
      type="password"
      register={register}
      rules={{
        required: "auth.requiredField",
        validate: (value) =>
          value === getValues(matchField) || "auth.invalidPasswordConfirmation",
      }}
      error={error}
    >
      <CiLock />
    </Input>
  );
};

export default ConfirmPasswordInput;
