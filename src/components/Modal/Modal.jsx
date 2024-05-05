"use client";
import { useEffect, useState } from "react";
import Backdrop from "./Backdrop";
import ModalContent from "./ModalContent";
import { createPortal } from "react-dom";

const Modal = ({ onClose, children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const modalRoot = document.getElementById("modal-root");

  return createPortal(
    <>
      <Backdrop onClose={onClose}>
        <ModalContent>{children}</ModalContent>
      </Backdrop>
    </>,
    modalRoot
  );
};

export default Modal;
