import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectError, selectIsLoading } from "../../redux/contacts/selectors";
import { selectFilteredContacts } from "../../redux/contacts/slice";
import { InfinitySpin } from "react-loader-spinner";

const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {isLoading && !error && (
        <InfinitySpin
          visible={true}
          width="200"
          color="#00f2ff"
          ariaLabel="infinity-spin-loading"
        />
      )}
      {contacts.map((contact) => {
        return (
          <li key={contact.id} className={css.contactItem}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
