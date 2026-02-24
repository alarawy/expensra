import { Text } from "./index";

const FormButton = ({ i18nKey }) => {
  return (
    <Text
      tagElement="button"
      type="submit"
      i18nKey={i18nKey}
      className="bg-accent mt-10 w-full cursor-pointer rounded-md px-3 py-2"
    />
  );
};

export default FormButton;