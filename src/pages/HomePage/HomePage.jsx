import Creators from "../../components/Creators/Creators";
import css from "./HomePage.module.css";

export default function Home() {
  return (
    <div className={css.global}>
      <div className={css.container}>
        <h1 className={css.title}>Welcome!</h1>
        <p className={css.desc}>It is secure storage of your contacts</p>
        <Creators />
      </div>
    </div>
  );
}
