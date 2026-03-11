import { CiMail } from "../../../assets/icons/icons";
import { Input } from "../index";

const EmailInput = ({ register, error }) => {
  return (
    <Input
      type="email"
      i18nKey="auth.email"
      id="email"
      placeholderKey="auth.emailPlaceholder"
      register={register}
      rules={{
        required: "auth.requiredField",
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "auth.invalidEmail",
        },
      }}
      error={error}
    >
      <CiMail />
    </Input>
  );
};

export default EmailInput;
