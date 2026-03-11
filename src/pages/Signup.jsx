import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useSignupUser } from "../hooks";
import {
  AuthRedirect,
  ConfirmPasswordInput,
  EmailInput,
  FormButton,
  FormHeading,
  Input,
  Loading,
  PasswordInput,
  Section,
} from "../components/common/index";
import { CiUser, CiMail, CiLock } from "../assets/icons/icons";
import toast from "react-hot-toast";
import { handleMutationError } from "../utils";

const Signup = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm();

  const { mutate: signUer, isPending } = useSignupUser();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onSignUp = (data) => {
    console.log(data);
    signUer(data, {
      onSuccess: () => {
        navigate("/dashboard");
        toast.success(t("auth.successRegister"));
      },
      onError: (error) => handleMutationError(error, t),
    });
    reset();
  };

  if (isPending) return <Loading />;

  return (
    <Section className="bg-secondary h-dvh content-center">
      <form
        className="form"
        onSubmit={handleSubmit(onSignUp)}
      >
        <FormHeading text="auth.signupHeading" />
        <div className="flex-between">
          <span className="w-[48%]">
            <Input
              i18nKey="auth.firstName"
              id="firstName"
              register={register}
              error={errors?.firstName}
            >
              <CiUser />
            </Input>
          </span>
          <span className="w-[48%]">
            <Input
              i18nKey="auth.lastName"
              id="lastName"
              register={register}
              error={errors?.lastName}
            >
              <CiUser />
            </Input>
          </span>
        </div>

        <EmailInput register={register} error={errors?.email} />
        <PasswordInput register={register} error={errors?.password} />
        <ConfirmPasswordInput
          register={register}
          error={errors?.confirmPassword}
          getValues={getValues}
        />

        <FormButton i18nKey="auth.register" isPending={isPending} className="mt-10" />
        <AuthRedirect i18nKey="auth.haveAccount" to="/login" />
      </form>
    </Section>
  );
};

export default Signup;
