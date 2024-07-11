import { InfinitySpin } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.wrap}>
      <InfinitySpin
        visible={true}
        width="300"
        color="#00f2ff"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Loader;
