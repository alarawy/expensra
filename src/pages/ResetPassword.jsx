import { useForm } from "react-hook-form";
import {
  ConfirmPasswordInput,
  FormButton,
  PasswordInput,
  Section,
  Text,
} from "../components/common";
import { useChangeUserPassword } from "../hooks";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutate: changePassword, isPending } = useChangeUserPassword();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    changePassword(data, {
      onSuccess: () => {
        navigate("/login");
      },
    });
  };
  return (
    <Section className="bg-secondary text-primary h-dvh content-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form"
      >
        <Text
          tagElement="h1"
          i18nKey="auth.resetDescription"
          className="py-5 text-center text-2xl"
        />
        <PasswordInput
          register={register}
          error={errors?.error}
        />
        <ConfirmPasswordInput
          register={register}
          error={errors?.confirmedPassword}
        />
        <FormButton i18nKey="auth.resetPassword" isPending={isPending} className="mt-10" />
      </form>
    </Section>
  );
};

export default ResetPassword;
