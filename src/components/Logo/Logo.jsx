import { Link } from "react-router-dom";
import css from "./Logo.module.css";

const Logo = () => {
  return (
    <Link to="" className={css.box}>
      <svg aria-label="logo">
        <use href="../../img/symbol-defs.svg#icon-logo"></use>
      </svg>
      <p className={css.text}>contact book</p>
    </Link>
  );
};

export default Logo;
