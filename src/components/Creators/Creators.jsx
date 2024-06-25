import css from "./Creators.module.css";

const Creators = () => {
  return (
    <div className={css.creators}>
      <h3 className={css.title}>Creators</h3>
      <p className={css.text}>
        Developer: <i>Holovko Maksym</i> 👨🏼‍💻
      </p>
      <p className={css.text}>
        Designer: <i>Pavlova Maria</i> ✨
      </p>
    </div>
  );
};

export default Creators;
