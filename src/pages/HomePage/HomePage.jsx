import css from "./HomePage.module.css";
import { GiSecretBook } from "react-icons/gi";

export default function Home() {
  return (
    <div className={css.global}>
      <div className={css.container}>
        <h1 className={css.title}>Welcome!</h1>
        <p className={css.desc}>It's secure storage of your contacts</p>
        <GiSecretBook className={css.icon} />
      </div>
      <div className={css.creators}>
        <h3 className={css.subtitle}>Creators</h3>
        <p className={css.text}>
          Developer: <i>Holovko Maksym</i> 👨🏼‍💻
        </p>
        <p className={css.text}>
          Designer: <i>Pavlova Maria</i> ✨
        </p>
      </div>
    </div>
  );
}
