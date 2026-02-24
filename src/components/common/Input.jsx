import { useTranslation } from "react-i18next";
import Text from "./Text";

const Input = ({
  id,
  i18nKey,
  type = "text",
  register,
  rules = { required: "auth.requiredField" },
  error,
  children,
  className = "",
  placeholderKey,
  ...props
}) => {
  const { t } = useTranslation();
  return (
    <div className={`relative flex flex-col flex-1 ${type === "search" ? "mt-0" : "mt-3"}`}>
      <Text
        tagElement="label"
        htmlFor={id}
        className="text-secondary w-fit pl-1 font-semibold"
        i18nKey={i18nKey}
      />
      <div className={`input ${className}`}>
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
      </div>
      {error && (
        <Text
          i18nKey={error.message}
          className="absolute -bottom-4 text-xs text-red-500 ltr:right-1 rtl:left-1"
        />
      )}
    </div>
  );
};

export default Input;
