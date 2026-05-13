import { useForm } from "react-hook-form";
import { FormButton, Input, Section, Text } from "../components/common";
import { MdOutlineMailLock } from "../assets/icons/icons";
import { useVerifyUser } from "../hooks";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { showToast } from "../utils";

const OTP = () => {
  const { mutate: verify, isPending } = useVerifyUser();

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onSubmit = (data) => {
    verify(data, {
      onSuccess: () => {
        navigate("/reset-password");
        showToast("auth.successRegister", "success", t);
      },
    });
  };

  return (
    <Section className="bg-secondary text-primary h-dvh content-center">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <span className="flex-center text-accent m-auto w-fit text-5xl md:text-7xl">
          <MdOutlineMailLock />
        </span>
        <Text
          tagElement="h1"
          i18nKey="auth.otpVerification"
          className="text-accent pt-2 text-center text-2xl font-semibold md:text-4xl"
        />
        <Text
          tagElement="h5"
          i18nKey="auth.otpDescription"
          className="text-muted border-bottom mt-4 mb-8 pb-4 text-center text-sm font-semibold"
        />
        <Input i18nKey="auth.otpTitle" id="otp" register={register} />

        <FormButton
          i18nKey="auth.otpButton"
          className="mt-10"
          isPending={isPending}
        />
        <Text
          tagElement="h5"
          i18nKey="auth.otpResendCode"
          className="text-muted text-md pt-3 text-center"
          components={[
            <button type="button" className="text-accent cursor-pointer" />,
          ]}
        />
      </form>
    </Section>
  );
};

export default OTP;
