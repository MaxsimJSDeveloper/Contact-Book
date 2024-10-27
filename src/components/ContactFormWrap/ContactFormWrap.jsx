import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";

import css from "./ContactFormWrap.module.css";

const ContactFormWrap = () => {
  return (
    <div className={css.formWrap}>
      <SearchBox />
      <ContactForm />
    </div>
  );
};

export default ContactFormWrap;
