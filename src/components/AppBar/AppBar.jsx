import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";

import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

import css from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header
      className={`${css.header} ${isLoggedIn ? css.loggedIn : css.loggedOut}`}
    >
      <Navigation />
      {!isLoggedIn && <AuthNav />}
    </header>
  );
};

export default AppBar;
