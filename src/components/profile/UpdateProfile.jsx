import { FormButton, Input, Text } from "../common";
import { useForm } from "react-hook-form";
import { CiMail, CiUser } from "../../assets/icons/icons";

const UpdateProfile = () => {
  const { register, handleSubmit } = useForm();
  const onUpdate = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-primary m-0 mt-8 rounded-md p-10">
      <Text
        tagElement="h3"
        i18nKey="profile.updateProfile"
        className="text-accent mb-5 text-2xl font-semibold"
      />
      <form onSubmit={handleSubmit(onUpdate)}>
        <div className="flex-center gap-3">
          <Input i18nKey="auth.firstName" id="firstName" register={register}>
            <CiUser />
          </Input>
          <Input i18nKey="auth.lastName" id="lastName" register={register}>
            <CiUser />
          </Input>
        </div>
        <Input i18nKey="auth.email" id="email" register={register} readOnly >
          <CiMail />
        </Input>
        <div className="flex-end mt-5 ltr:ml-auto rtl:mr-auto w-fit gap-3">
          <FormButton
            type="reset"
            i18nKey="common.reset"
            className="bg-transparent text-(--accent) hover:text-(--accent-hover) min-w-25"
          />
          <FormButton i18nKey="common.update" />
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
