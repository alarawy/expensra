import { useForm } from "react-hook-form";
import { AuthRedirect, FormButton, FormHeading, Input } from "../components/common/index";
// import useLogin from "../hooks/auth/useLogin";
import { CiMail, CiLock } from "../assets/icons/icons";
const Login = () => {
  const { register, handleSubmit } = useForm();
  // const { login, isPending } = useLogin();

  const onLogin = (loginData) => {
    console.log(loginData);
  };

  return (
    <section className="bg-secondary h-dvh content-center">
      <div className="form">
        <FormHeading text="Welcome back"/>
        <form className="w-full border-top pt-5" onSubmit={handleSubmit(onLogin)}>
          <Input
            inputName="email"
            type="email"
            labelName="Email address"
            register={register}
          >
            <CiMail size={20} />
          </Input>
          <Input
            inputName="password"
            type="password"
            labelName="Password"
            register={register}
          >
            <CiLock size={20} />
          </Input>

          <div className="flex-between text-sm px-2 pt-2">
            <label htmlFor="remember" className="text-secondary flex-start gap-1.5">
              <input type="checkbox" name="remember" id="remember" />
              Remember me
            </label>
            <a href="#" className="text-accent font-semibold">
              Forgot password?
            </a>
          </div>
          <FormButton buttonText="Log in" />
        </form>
        <AuthRedirect text="Don't" to="/signup" linkText="Sign up" />
      </div>
    </section>
  );
};

export default Login;
