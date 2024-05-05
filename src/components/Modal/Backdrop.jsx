"use client";
import { useEffect } from "react";
import MenuButton from "../MenuButton";

const Backdrop = ({ onClose, children }) => {
  useEffect(() => {
    const handleCloseByEsc = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleCloseByEsc);

    return () => window.removeEventListener("keydown", handleCloseByEsc);
  }, [onClose]);

  const handleCloseByClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleCloseByClick}
      className="fixed top-[0px] left-[0px] flex justify-center w-full h-full bg-backdropColor backdrop-blur-xl z-9999"
    >
      <MenuButton
        caption="Close"
        onClick={onClose}
        className="absolute top-[43px] right-[20px]"
      />
      {children}
    </div>
  );
};

export default Backdrop;
