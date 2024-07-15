import { Helmet, HelmetProvider } from "react-helmet-async";

import LoginForm from "../../components/LoginForm/LoginForm";
import Creators from "../../components/Creators/Creators";
import Logo from "../../components/Logo/Logo";

import css from "./LoginPage.module.css";

export default function Login() {
  return (
    <HelmetProvider>
      <div className={css.container}>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <Logo />
        <LoginForm />
        <Creators />
      </div>
    </HelmetProvider>
  );
}
