import { AddCategoryBudget } from "../../components/budget";
import { ConfirmDialog } from "../../components/common";
import { useModal } from "./modalContext";

const ModalRenderer = () => {
  const { modal, closeModal } = useModal();

  if (!modal) return null;

  switch (modal.name) {
    case "logoutConfirm":
      return (
        <ConfirmDialog
          openDialog={true}
          handleOpenDialog={closeModal}
          {...modal.props}
        />
      );

    case "deleteItem":
      return (
        <ConfirmDialog
          openDialog={true}
          handleOpenDialog={closeModal}
          variant="delete"
          {...modal.props}
        />
      );

    case "addCategoryBudget":
      return (
        <AddCategoryBudget
          openDialog={true}
          handleOpenDialog={closeModal}
          {...modal.props}
        />
      );

    default:
      return null;
  }
};

export default ModalRenderer;
