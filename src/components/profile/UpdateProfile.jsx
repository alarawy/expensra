import { FormButton, Input, Text } from "../common";
import { useForm } from "react-hook-form";
import { CiMail, CiUser } from "../../assets/icons/icons";
import { useGetCurrentUser, useUpdateUserProfile } from "../../hooks";

const UpdateProfile = () => {
  const {
    data: { email },
  } = useGetCurrentUser();
  const { mutate: updateProfile, isPending } = useUpdateUserProfile();

  const { register, handleSubmit } = useForm();
  const onUpdate = (data) => {
    console.log(data);
    updateProfile(data);
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
        <Input
          i18nKey="auth.email"
          id="email"
          value={email}
          register={register}
          readOnly
        >
          <CiMail />
        </Input>
        <div className="flex-center gap-1 md:gap-5 mt-5">
          <Text
            tagElement="label"
            i18nKey="profile.changeAvatar"
            className="text-secondary font-semibold flex min-w-fit"
            htmlFor="avatar"
          />
          <input
            className="file-input"
            type="file"
            id="avatar"
            {...register("avatar")}
          />
        </div>
        <div className="flex-end mt-5 w-fit gap-3 ltr:ml-auto rtl:mr-auto">
          <FormButton
            type="reset"
            i18nKey="common.reset"
            className="min-w-25 bg-transparent text-(--accent) hover:text-(--accent-hover)"
          />
          <FormButton i18nKey="common.update" />
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
