import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = ({ onLinkClick }) => {
  return (
    <div className={css.box}>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.activeLink}` : css.link
        }
        to="/register"
        onClick={onLinkClick}
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.activeLink}` : css.link
        }
        to="/login"
        onClick={onLinkClick}
      >
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
