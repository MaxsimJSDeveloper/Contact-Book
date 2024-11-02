import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";
import { selectError, selectIsLoading } from "../../redux/contacts/selectors";
import { selectFilteredContacts } from "../../redux/contacts/slice";
import Loader from "../Loader/Loader";

const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      {isLoading && !error && <Loader />}
      {contacts.length > 0 ? (
        <ul className={css.contactList}>
          {contacts.map((contact) => (
            <li key={contact.id} className={css.contactItem}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      ) : (
        <h1 className={css.title}>Let&apos;s add more contacts to the list!</h1>
      )}
    </>
  );
};

export default ContactList;
