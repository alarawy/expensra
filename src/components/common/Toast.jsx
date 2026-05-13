import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";

const Toast = ({ message, variant = "success" }) => {
  const { t } = useTranslation();

  const text = t(message);

  const showToast = () => {
    switch (variant) {
      case "success":
        return toast.success(text);
      case "error":
        return toast.error(text);
      case "loading":
        return toast.loading(text);
      default:
        return toast(text);
    }
  };

  return showToast();
};

export default Toast;
