import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import { Helmet } from "react-helmet";
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from "../../redux/contacts/selectors";
import SearchBox from "../../components/SearchBox/SearchBox";
import { InfinitySpin } from "react-loader-spinner";

export default function Contacts() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactForm />
      <SearchBox />
      <div>
        {isLoading && (
          <InfinitySpin
            visible={true}
            width="200"
            color="#00f2ff"
            ariaLabel="infinity-spin-loading"
          />
        )}
        {error && "Error! Try again"}
      </div>
      <ContactList contacts={contacts} />
    </>
  );
}
