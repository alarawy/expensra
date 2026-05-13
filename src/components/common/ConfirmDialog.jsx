import { useNavigate } from "react-router-dom";
import { BsExclamationOctagon, FaXmark } from "../../assets/icons/icons";
import { Overlay, Text } from "./index";
import { useTranslation } from "react-i18next";
import { showToast } from "../../utils";

const ConfirmDialog = ({
  openDialog,
  handleOpenDialog,
  onConfirm,
  variant = "logout",
}) => {
  const { t } = useTranslation()
  const navigate = useNavigate();
  const isLogout = variant === "logout";

  const onDelete = async () => {
    await onConfirm?.();
    showToast("transactions.deleteTransactionSuccess", "success", t)
    handleOpenDialog(false);
  };
  
  const onLogout = () => {
    onConfirm?.();
    navigate("/login");
    showToast("auth.successLogout", "success", t)
    handleOpenDialog(false);
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
                    isLogout ? "auth.logout" : "transactions.deleteTransaction"
                  }
                  className="text-3xl font-semibold md:text-5xl"
                />
                <Text
                  tagElement="h5"
                  i18nKey={
                    isLogout
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
                  i18nKey={isLogout ? "auth.logout" : "common.delete"}
                  className="cursor-pointer rounded-md bg-red-600 px-4 py-2 text-white transition-all duration-300 hover:bg-red-700"
                  onClick={isLogout ? onLogout : onDelete}
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
