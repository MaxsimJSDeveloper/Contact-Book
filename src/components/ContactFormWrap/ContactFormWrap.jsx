import { useEffect, useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";

import css from "./ContactFormWrap.module.css";

const ContactFormWrap = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={isMobile ? css.trap : css.wrap}>
      <SearchBox />
      <ContactForm />
    </div>
  );
};

export default ContactFormWrap;
