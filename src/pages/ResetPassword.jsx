import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useResetUserPassword } from "../hooks";
import {
  ConfirmPasswordInput,
  FormButton,
  Input,
  PasswordInput,
  Section,
  Text,
} from "../components/common";
import { FaKey } from "../assets/icons/icons";
import { useTranslation } from "react-i18next";
import { showToast } from "../utils";
import SEO from "../components/SEO";

const ResetPassword = () => {
  const email = localStorage.getItem("resetEmail");

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const { mutate: resetUserPassword, isPending } = useResetUserPassword();

  const navigate = useNavigate();
  const { t } = useTranslation();

  const onSubmit = (data) => {
    const newData = {
      ...data,
      email: email,
    };

    resetUserPassword(newData, {
      onSuccess: () => {
        navigate("/login");
        localStorage.removeItem("resetEmail");
        showToast("auth.passwordReset", "success", t);
      },
    });
  };

  return (
    <>
    <SEO
        title="Set New Password | Expensra"
        description="Create a new password for your Expensra account."
        noIndex
      />
      <Section className="bg-secondary text-primary h-dvh content-center">
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <span className="flex-center text-accent py-3 text-5xl">
            <FaKey />
          </span>
          <Text
            tagElement="h1"
            i18nKey="auth.resetDescription"
            className="border-bottom pb-6 text-center text-2xl"
          />

          <Input
            i18nKey="auth.otpTitle"
            id="otp"
            register={register}
            rules={{ required: "auth.requiredField" }}
            error={errors?.otp}
          />

          <PasswordInput
            i18nKey="auth.newPassword"
            register={register}
            error={errors?.password}
          />

          <ConfirmPasswordInput
            register={register}
            error={errors?.password_confirmation}
            getValues={getValues}
          />
          <FormButton
            i18nKey="auth.resetPassword"
            isPending={isPending}
            className="mt-10"
          />
        </form>
      </Section>
    </>
  );
};

export default ResetPassword;
