import toast from "react-hot-toast";

const handleMutationError = (error, t, options = {}) => {
    const { customMessage } = options;

    let messageKey = customMessage || "";

    if (!messageKey) {
        if (error?.response?.data?.error) {
            messageKey = error.response.data.error;
        } else if (error?.request) {
            messageKey = "NETWORK_ERROR";
        } else if (typeof error === "string") {
            messageKey = error;
        } else {
            messageKey = "UNKNOWN_ERROR";
        }
    }

    const finalMessage = t(`errors.${messageKey}`) || messageKey;

    toast.error(finalMessage);
};

export default handleMutationError