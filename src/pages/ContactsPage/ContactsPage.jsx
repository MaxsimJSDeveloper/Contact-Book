import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactList from "../../components/ContactList/ContactList";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from "../../redux/contacts/selectors";

import css from "./ContactsPage.module.css";
import ContactFormWrap from "../../components/ContactFormWrap/ContactFormWrap";

export default function Contacts() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const loading = useSelector(selectIsLoading);

  const [startLoad, setStartLoad] = useState(false);

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
          <div className={css.wrap}>
            <ContactList contacts={contacts} />
            {startLoad && <ContactFormWrap />}
          </div>
        </main>
      </HelmetProvider>
    </>
  );
}
