import { Text } from "./index";

const Button = ({ i18nKey, className, ...props }) => {
  return (
    <button
      type="button"
      className={`bg-accent cursor-pointer rounded-md px-3 py-2 text-white ${className}`}
      {...props}
    >
      {/* <span className="ltr:pr-2 rtl:pl-2">+</span> */}
      <Text i18nKey={i18nKey} />
    </button>
  );
};

export default Button;
