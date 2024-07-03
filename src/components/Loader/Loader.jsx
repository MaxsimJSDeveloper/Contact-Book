import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <InfinitySpin
      visible={true}
      width="200"
      color="#00f2ff"
      ariaLabel="infinity-spin-loading"
    />
  );
};

export default Loader;
