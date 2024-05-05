"use client";
import Container from "../Container";
import Logo from "../Logo";
import MenuButton from "../MenuButton";
import Navigation from "../Navigation/Navigation";
import Modal from "../Modal/Modal";
import { useState } from "react";
import css from "./Header.module.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const onToggleModal = () => {
    setShowModal(!showModal);
    document.body.classList.toggle("is-open");
  };

  return (
    <header className="absolute w-full bg-transparent">
      <Container containerClasses={[css.headerContainer]}>
        <Logo />
        <Navigation className="smOnly:hidden" />
        {!showModal && <MenuButton caption="Menu" onClick={onToggleModal} />}
      </Container>
      {showModal && (
        <Modal onClose={onToggleModal}>
          <Navigation
            listClassName="flex-col items-center text-center text-[18px] gap-[48px]"
            linkClassName="py-[0px] leading-[1.8px]"
            onLinkClick={onToggleModal}
          />
        </Modal>
      )}
    </header>
  );
};

export default Header;
