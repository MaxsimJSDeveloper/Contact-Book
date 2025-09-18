import css from "./Creators.module.css";

const Creators = () => {
  return (
    <div className={css.creators}>
      <h3 className={css.title}>Creators</h3>
      <div className={css.box}>
        <p className={css.text}>Developer:</p>
        <a
          className={css.link}
          href="https://www.linkedin.com/in/maksymholovko/"
          target="_blank"
        >
          Holovko Maksym
        </a>
      </div>
      <div className={css.box}>
        <p className={css.text}>Designer:</p>
        <a
          className={css.link}
          href="https://www.linkedin.com/in/maria-pavlova-03811b384/"
          target="_blank"
        >
          Pavlova Maria
        </a>
      </div>
    </div>
  );
};

export default Creators;
