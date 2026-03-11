import { useState } from "react";
import { ModalContext } from "./modalContext";

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(null);

  const openModal = (modalName, modalProps = {}) => {
    setModal({ name: modalName, props: modalProps });
  };

  const closeModal = () => {
    setModal(null);
  };

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
export default ModalProvider;