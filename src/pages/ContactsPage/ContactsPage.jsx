import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactList from "../../components/ContactList/ContactList";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { CiCirclePlus } from "react-icons/ci";
import { IconButton } from "@mui/material";
import ModalCreate from "../../components/ModalCreate/ModalCreate";

import {
  selectContacts,
  selectError,
  selectIsLoading,
} from "../../redux/contacts/selectors";

import css from "./ContactsPage.module.css";
import ContactFormWrap from "../../components/ContactFormWrap/ContactFormWrap";
import SearchBox from "../../components/SearchBox/SearchBox";

export default function Contacts() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const loading = useSelector(selectIsLoading);

  const [startLoad, setStartLoad] = useState(false);
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

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (!loading) setStartLoad(true);
  }, [loading]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Contacts</title>
        </Helmet>
        <main className={css.container}>
          {error && "Error! Try again"}
          {isMobile && <SearchBox />}
          <div className={css.wrap}>
            <ContactList contacts={contacts} />
            {isMobile ? (
              <>
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
                <ModalCreate
                  isOpen={isModalOpen}
                  handleClose={handleCloseModal}
                />
              </>
            ) : (
              startLoad && <ContactFormWrap />
            )}
          </div>
        </main>
      </HelmetProvider>
    </>
  );
}
