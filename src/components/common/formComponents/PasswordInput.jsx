import { CiLock } from "../../../assets/icons/icons";
import { Input } from "../index";

const PasswordInput = ({
  i18nKey = "auth.password",
  register,
  id = "password",
  error,
  ...props
}) => {
  return (
    <Input
      i18nKey={i18nKey}
      id={id}
      type="password"
      register={register}
      rules={{
        required: "auth.requiredField",
        minLength: {
          value: 8,
          message: "auth.invalidPassword",
        },
      }}
      error={error}
      {...props}
    >
      <CiLock />
    </Input>
  );
};

export default PasswordInput;
