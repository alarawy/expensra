import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useLoginUser } from "../hooks";
import {
  AuthRedirect,
  FormButton,
  FormHeading,
  Input,
  Loading,
  Section,
  Text,
} from "../components/common";
import { CiMail, CiLock } from "../assets/icons/icons";
import toast from "react-hot-toast";
import { handleMutationError } from "../utils";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { mutate: loginUser, isPending } = useLoginUser();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onLogin = (loginData) => {
    console.log(loginData);
    loginUser(loginData, {
      onSuccess: ()=> {
        navigate("/dashboard")
        toast.success(t("auth.successLogin"))
      },
      onError: (error) => handleMutationError(error, t)
    })
  };

  if(isPending) return <Loading />

  return (
    <Section className="bg-secondary h-dvh content-center">
      <div className="form">
        <FormHeading text="auth.loginHeading" />
        <form
          className="border-top w-full pt-5"
          onSubmit={handleSubmit(onLogin)}
        >
          <Input
            id="email"
            type="email"
            i18nKey="auth.email"
            register={register}
          >
            <CiMail />
          </Input>

          <Input
            id="password"
            type="password"
            i18nKey="auth.password"
            register={register}
          >
            <CiLock />
          </Input>
          
          <div className="text-accent flex-end px-2 pt-2 text-sm font-semibold">
            <Text
              tagElement={Link}
              to="/forget-password"
              i18nKey="auth.forgotPassword"
              className="hover:underline"
            />
          </div>
          <FormButton i18nKey="auth.login" />
        </form>
        <AuthRedirect i18nKey="auth.noAccount" to="/signup" />
      </div>
    </Section>
  );
};

export default Login;
