import { useEffect, useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import { CiCirclePlus } from "react-icons/ci";
import { IconButton } from "@mui/material";
import ModalCreate from "../ModalCreate/ModalCreate";
import css from "./ContactFormWrap.module.css";

const ContactFormWrap = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isMobile ? (
        <IconButton
          variant="outlined"
          type="button"
          style={{ padding: "8px" }}
          onClick={handleOpenModal}
          aria-label="Add contact"
          className={css.buttonWrap}
        >
          <p>Add contact</p>
          <CiCirclePlus className={css.icon} />
        </IconButton>
      ) : (
        <div>
          <SearchBox />
          <ContactForm />
        </div>
      )}
      <ModalCreate isOpen={isModalOpen} handleClose={handleCloseModal} />
    </>
  );
};

export default ContactFormWrap;
