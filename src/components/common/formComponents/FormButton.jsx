import { Text } from "../index";

const FormButton = ({
  i18nKey,
  className,
  type = "submit",
  isPending = false,
  ...props
}) => {
  return (
    <Text
      tagElement="button"
      type={type}
      i18nKey={i18nKey}
      className={`bg-accent w-full rounded-md px-3 py-2 transition-all duration-300 ${`${isPending ? "cursor-not-allowed bg-gray-500" : "cursor-pointer"} ${className}`} `}
      {...props}
    />
  );
};

export default FormButton;
