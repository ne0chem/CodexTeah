// src/context/ModalContext.js
import { createContext, useState } from "react";
import Zayavka from "../Zayavka/Zayavka";
import "./Modal.css";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const Modal = () =>
    isModalOpen && (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={closeModal}>
            ×
          </button>
          <Zayavka />
        </div>
      </div>
    );

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <Modal />
    </ModalContext.Provider>
  );
};
