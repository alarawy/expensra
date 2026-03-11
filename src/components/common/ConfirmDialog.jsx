import { useNavigate } from "react-router-dom";
import { BsExclamationOctagon, FaXmark } from "../../assets/icons/icons";
import { Overlay, Text } from "./index";
import toast from "react-hot-toast";

const ConfirmDialog = ({
  openDialog,
  handleOpenDialog,
  onConfirm,
  variant = "logout",
}) => {
  const navigate = useNavigate();

  const onDelete = () => {
    onConfirm(undefined, {
      OnSuccess: () => {
        toast.success("");
      },
    });
  };

  const onLogout = () => {
    onConfirm(undefined, {
      OnSuccess: () => {
        navigate("/login");
      },
    });
  };
  return (
    <>
      {openDialog && (
        <Overlay
          onClick={() => {
            handleOpenDialog(false);
          }}
        >
          <div className="flex-center h-full w-full px-2">
            <div
              onClick={(e) => e.stopPropagation()}
              className="text-primary bg-primary border-default relative z-50 m-auto max-w-lg flex-1 rounded-2xl p-5 shadow-2xl"
            >
              <button
                type="button"
                className="icons-scale absolute top-5 text-2xl ltr:right-5 rtl:left-5"
                onClick={() => handleOpenDialog(false)}
              >
                <FaXmark />
              </button>
              <span className="flex-center m-auto w-full py-5 text-5xl text-red-400 md:text-7xl">
                <BsExclamationOctagon />
              </span>
              <div className="space-y-6 text-center">
                <Text
                  tagElement="h2"
                  i18nKey={
                    variant === "logout"
                      ? "auth.logout"
                      : "transactions.deleteTransaction"
                  }
                  className="text-3xl font-semibold md:text-5xl"
                />
                <Text
                  tagElement="h5"
                  i18nKey={
                    variant === "logout"
                      ? "auth.confirmLogout"
                      : "transactions.confirmDeleteTransaction"
                  }
                  className="text-secondary"
                />
              </div>
              <div className="flex-start border-top mt-5 w-full gap-3 pt-5">
                <Text
                  tagElement="button"
                  type="button"
                  i18nKey={
                    variant === "logout" ? "auth.logout" : "common.delete"
                  }
                  className="cursor-pointer rounded-md bg-red-600 px-4 py-2 text-white transition-all duration-300 hover:bg-red-700"
                  onClick={variant ? onLogout : onDelete}
                />
                <Text
                  tagElement="button"
                  type="button"
                  i18nKey="common.cancel"
                  className="bg-accent cursor-pointer rounded-md px-4 py-2 transition-all duration-300"
                  onClick={() => handleOpenDialog(false)}
                />
              </div>
            </div>
          </div>
        </Overlay>
      )}
    </>
  );
};

export default ConfirmDialog;
