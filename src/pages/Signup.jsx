import { useForm } from "react-hook-form";
// import useSignUp from "../hooks/auth/useSignUp";
import {
  AuthRedirect,
  FormButton,
  FormHeading,
  Input,
} from "../components/common/index";
import { CiUser, CiMail, CiLock } from "../assets/icons/icons";

const Signup = () => {
  // const {signUp, isPending} = useSignUp()
  const { register, handleSubmit, getValues, formState, reset } = useForm();
  const { errors } = formState;

  const onSignUp = (data) => {
    // signUp(data, {onSettled: rest})
    console.log(data);
    reset()
  };

  return (
    <section className="bg-secondary h-dvh content-center">
      <div className="form">
        <FormHeading text="Welcome" />
        <form
          className="border-top w-full pt-5"
          onSubmit={handleSubmit(onSignUp)}
        >
          <div className="flex-between">
            <span className="w-[48%]">
              <Input
                labelName="First name"
                inputName="firstName"
                register={register}
                error={errors?.firstName}
              >
                <span>
                  <CiUser size={20} />
                </span>
              </Input>
            </span>
            <span className="w-[48%]">
              <Input
                labelName="Last name"
                inputName="lastName"
                register={register}
                error={errors?.lastName}
              >
                <span>
                  <CiUser size={20} />
                </span>
              </Input>
            </span>
          </div>

          <Input
            labelName="Email"
            inputName="email"
            type="email"
            register={register}
            rule={{
              required: 'This field is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address.",
              },
            }}
            error={errors?.email}
          >
            <span>
              <CiMail size={20} />
            </span>
          </Input>
          <Input
            labelName="Password"
            inputName="password"
            type="password"
            register={register}
            rule={{
              required: 'This field is required',
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            }}
            error={errors?.password}
          >
            <span>
              <CiLock size={20} />
            </span>
          </Input>

          <Input
            labelName="Confirm password"
            inputName="confirmPassword"
            type="password"
            register={register}
            rule={{
              required: 'This field is required',
              validate: (value) =>
                value === getValues().password ||
                "Please make sure both passwords match.",
            }}
            error={errors?.confirmPassword}
          >
            <span>
              <CiLock size={20} />
            </span>
          </Input>

          <FormButton buttonText="Sign up" />
        </form>
        <AuthRedirect text="Already" to="/login" linkText="Log in" />
      </div>
    </section>
  );
};

export default Signup;
