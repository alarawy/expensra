import toast from "react-hot-toast";
import { FaCheck, FaSpinner, FaTimes } from '../../assets/icons/icons'

export const showToast = (message, variant = "success", t) => {
  const text = t ? t(message) : message;
  const icons = {
    success: <FaCheck className="text-green-200" />,
    error: <FaTimes className="text-red-200" />,
    loading: <FaSpinner className="animate-spin text-gray-200" />,
  };
  return toast.custom((tObj) => (
    <div
      className={`flex items-center gap-2 rounded-lg px-4 py-3 text-sm shadow-md ${variant === "success" && "bg-green-600 text-white"} ${variant === "error" && "bg-red-600 text-white"} ${variant === "loading" && "bg-gray-700 text-white"} ${tObj.visible ? "animate-in fade-in" : "animate-out fade-out"} `}
    >
      <span className="text-lg">{icons[variant]}</span>

      {/* Message */}
      <span>{text}</span>
    </div>
  ));
};
