import { useState } from "react";
import css from "./UserMenu.module.css";
import ModalLogout from "../ModalLogout/ModalLogout";

export const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClickClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={css.wrapper}>
      <button onClick={handleClickOpen} className={css.button} type="button">
        Log out
      </button>
      <ModalLogout isOpen={isOpen} onClose={handleClickClose} />
    </div>
  );
};
