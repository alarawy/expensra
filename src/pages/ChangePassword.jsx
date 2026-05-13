import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
  ConfirmPasswordInput,
  FormButton,
  Input,
  PasswordInput,
  Section,
  Text,
} from "../components/common";
import { useChangeUserPassword, useGetCurrentUser } from "../hooks";
import { FaKey } from "../assets/icons/icons";
import { showToast } from "../utils";

const ChangePassword = () => {
  const { data: currentUser } = useGetCurrentUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const { mutate: changeUserPassword, isPending } = useChangeUserPassword();

  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const onSubmit = (data) => {
    const newData = {
      ...data,
      email: currentUser.email,
    };

    changeUserPassword(newData, {
      onSuccess: () => {
        navigate("/dashboard");
        showToast("auth.passwordChanged", "success", t)
      },
    });
  };

  return (
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

        <PasswordInput
          i18nKey="profile.currentPassword"
          register={register}
          id="current_password"
          error={errors?.current_password}
        />

        <PasswordInput
          i18nKey="auth.newPassword"
          register={register}
          id="new_password"
          error={errors?.new_password}
        />

        <ConfirmPasswordInput
          register={register}
          matchField="new_password"
          id="new_password_confirmation"
          error={errors?.new_password_confirmation}
          getValues={getValues}
        />
        <FormButton
          i18nKey="profile.changePassword"
          isPending={isPending}
          className="mt-10"
        />
      </form>
    </Section>
  );
};

export default ChangePassword;
