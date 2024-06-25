import css from "./Logo.module.css";

export const Logo = () => {
  return (
    <div className={css.box}>
      <img src="/img/logo.png" />
      <p className={css.text}>contact book</p>
    </div>
  );
};

export default Logo;
