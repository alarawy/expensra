import {
  FaCheck,
  FaSpinner,
  FaTimes,
  FaExclamationTriangle,
} from "../../assets/icons/icons";

import toast from "react-hot-toast";

export const showToast = (message, variant = "success", t, options = {}) => {
  const text = t ? t(message, options) : message;

  const safeVariant = ["success", "error", "loading", "warning"].includes(
    variant,
  )
    ? variant
    : "success";

  const icons = {
    success: <FaCheck className="text-green-200" />,
    error: <FaTimes className="text-red-200" />,
    loading: <FaSpinner className="animate-spin text-gray-200" />,
    warning: <FaExclamationTriangle className="text-yellow-200" />,
  };

  return toast.custom((tObj) => (
    <div
      className={`flex items-center gap-2 rounded-lg px-4 py-3 text-sm shadow-md ${safeVariant === "success" && "bg-green-600 text-white"} ${safeVariant === "error" && "bg-red-600 text-white"} ${safeVariant === "loading" && "bg-gray-700 text-white"} ${safeVariant === "warning" && "bg-yellow-600 text-white"} ${tObj.visible ? "animate-in fade-in" : "animate-out fade-out"} `}
    >
      <span className="text-lg">{icons[safeVariant]}</span>
      <span>{text}</span>
    </div>
  ));
};
