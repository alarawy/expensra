import { AddBudgetForm } from "../../components/budget";
import { ConfirmDialog } from "../../components/common";
import { AddDepositForm, AddGoalsForm, ConfirmCarryOverDialog, TransferToGoalDialog } from "../../components/goals";
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
          {...modal.props}
        />
      );

    case "addBudget":
      return (
        <AddBudgetForm
          openDialog={true}
          handleOpenDialog={closeModal}
          {...modal.props}
        />
      );
    case "addGoals":
      return (
        <AddGoalsForm
          openDialog={true}
          handleOpenDialog={closeModal}
          {...modal.props}
        />
      );
    case "leftoverSaving":
      return (
        <TransferToGoalDialog
          openDialog={true}
          handleOpenDialog={closeModal}
          {...modal.props}
        />
      );
    case "addDeposit":
      return (
        <AddDepositForm
          openDialog={true}
          handleOpenDialog={closeModal}
          {...modal.props}
        />
      );
    case "carryOver":
      return (
        <ConfirmCarryOverDialog
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
