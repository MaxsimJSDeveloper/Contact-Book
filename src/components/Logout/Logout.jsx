import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";

const Logout = ({ onClose }) => {
  const dispatch = useDispatch();

  return (
    <button
      style={{
        marginTop: 50,
        backgroundColor: "inherit",
        border: "none",
      }}
      onClick={() => {
        dispatch(logOut());
        onClose();
      }}
    >
      Logout
    </button>
  );
};

export default Logout;
