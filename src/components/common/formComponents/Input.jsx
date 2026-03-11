import { useTranslation } from "react-i18next";
import Text from "../Text";

const Input = ({
  id,
  i18nKey,
  type = "text",
  register,
  rules = { required: "auth.requiredField" },
  error,
  children,
  placeholderKey,
  ...props
}) => {
  const { t } = useTranslation();
  return (
    <div
      className={`flex flex-1 flex-col ${type === "search" ? "mt-0" : "mt-3"}`}
    >
      <Text
        tagElement="label"
        htmlFor={id}
        className="text-secondary w-fit px-1 font-semibold"
        i18nKey={i18nKey}
      />
      <div
        className={`input ${type === "search" ? "bg-primary m-0 flex-row-reverse" : ""}`}
      >
        {children && (
          <span className="text-secondary text-2xl">{children}</span>
        )}
        <input
          {...props}
          type={type}
          id={id}
          {...(register ? register(id, rules) : {})}
          placeholder={t(placeholderKey) || t(i18nKey)}
          className="w-full border-0 outline-0"
        />
        {error && (
          <Text
            i18nKey={error.message}
            className="absolute -bottom-5 text-xs text-red-500 ltr:right-1 rtl:left-1"
          />
        )}
      </div>
    </div>
  );
};

export default Input;
