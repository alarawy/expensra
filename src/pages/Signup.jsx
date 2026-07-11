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
import { showToast } from "../utils";
import SEO from "../components/SEO";

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
    signUer(data, {
      onSuccess: () => {
        navigate("/otp");
        localStorage.setItem(
          "user",
          JSON.stringify({ email: data.email, password: data.password }),
        );
      },
      onError: () => showToast("auth.signupError", "error", t),
    });
    reset();
  };

  if (isPending) return <Loading />;

  return (
    <>
      <SEO
        title="Sing up | Expensra"
        description="Create your Expensra account and start tracking your income, expenses, and financial goals."
        noIndex
      />
      <Section className="bg-secondary h-dvh content-center px-3">
        <form className="form" onSubmit={handleSubmit(onSignUp)}>
          <FormHeading text="auth.signupHeading" />
          <div className="flex-between">
            <span className="w-[48%]">
              <Input
                i18nKey="auth.firstName"
                id="first_name"
                register={register}
                error={errors?.first_name}
              >
                <CiUser />
              </Input>
            </span>
            <span className="w-[48%]">
              <Input
                i18nKey="auth.lastName"
                id="last_name"
                register={register}
                error={errors?.last_name}
              >
                <CiUser />
              </Input>
            </span>
          </div>

          <EmailInput register={register} error={errors?.email} />
          <PasswordInput register={register} error={errors?.password} />
          <ConfirmPasswordInput
            register={register}
            error={errors?.password_confirmation}
            getValues={getValues}
          />

          <FormButton
            i18nKey="auth.register"
            isPending={isPending}
            className="mt-10"
          />
          <AuthRedirect i18nKey="auth.haveAccount" to="/login" />
        </form>
      </Section>
    </>
  );
};

export default Signup;
