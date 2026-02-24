import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useSignupUser } from "../hooks";
import {
  AuthRedirect,
  FormButton,
  FormHeading,
  Input,
  Loading,
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
      <div className="form">
        <FormHeading text="auth.signupHeading" />
        <form
          className="border-top w-full pt-5"
          onSubmit={handleSubmit(onSignUp)}
        >
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

          <Input
            i18nKey="auth.email"
            id="email"
            type="email"
            register={register}
            rules={{
              required: "auth.requiredField",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "auth.invalidEmail",
              },
            }}
            error={errors?.email}
          >
            <CiMail />
          </Input>
          <Input
            i18nKey="auth.password"
            id="password"
            type="password"
            register={register}
            rules={{
              required: "auth.requiredField",
              minLength: {
                value: 8,
                message: "auth.invalidPassword",
              },
            }}
            error={errors?.password}
          >
            <CiLock />
          </Input>

          <Input
            i18nKey="auth.confirmPassword"
            id="confirmPassword"
            type="password"
            register={register}
            rules={{
              required: "auth.requiredField",
              validate: (value) =>
                value === getValues().password ||
                "auth.invalidPasswordConfirmation",
            }}
            error={errors?.confirmPassword}
          >
            <CiLock />
          </Input>

          <FormButton i18nKey="auth.register" />
        </form>
        <AuthRedirect i18nKey="auth.haveAccount" to="/login" />
      </div>
    </Section>
  );
};

export default Signup;
