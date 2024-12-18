import { Helmet, HelmetProvider } from "react-helmet-async";

import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import Creators from "../../components/Creators/Creators";

import css from "./RegistrationPage.module.css";

export default function RegistrationPage() {
  return (
    <HelmetProvider>
      <div className={css.container}>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <RegistrationForm />
        <Creators />
      </div>
    </HelmetProvider>
  );
}
