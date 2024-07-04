import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import css from "./Navigation.module.css";

const Navigation = ({ onLinkClick }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? `${css.link} ${css.activeLink} ${css.homeLink}`
            : `${css.link} ${css.homeLink}`
        }
        to="/"
        onClick={onLinkClick}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={({ isActive }) =>
            isActive ? `${css.link} ${css.activeLink}` : css.link
          }
          to="/contacts"
          onClick={onLinkClick}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
