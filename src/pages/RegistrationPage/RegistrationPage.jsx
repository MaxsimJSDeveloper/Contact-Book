import { Helmet } from "react-helmet";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import Creators from "../../components/Creators/Creators";
import Logo from "../../components/Logo/Logo";

import css from "./RegistrationPage.module.css";

export default function RegistrationPage() {
  return (
    <div className={css.container}>
      <Logo />
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegistrationForm />
      <Creators />
    </div>
  );
}
