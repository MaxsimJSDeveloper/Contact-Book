// src/components/Contact/Contact.jsx
import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import { setActiveContactId, toggleModal } from "../../redux/contacts/slice";
import { FaPhoneAlt, FaUser } from "react-icons/fa";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  const handleEdit = () => {
    dispatch(setActiveContactId(id));
    dispatch(toggleModal());
  };

  return (
    <div className={css.contact}>
      <div className={css.data}>
        <p className={css.info}>
          <FaUser className={css.infoIcon} /> {name}
        </p>
        <p className={css.info}>
          <FaPhoneAlt className={css.infoIcon} /> {number}
        </p>
      </div>
      <button className={css.button} type="button" onClick={handleEdit}>
        <MdModeEdit className={css.pencil} />
      </button>
      <button className={css.button} type="button" onClick={handleDelete}>
        <MdDeleteForever className={css.bin} />
      </button>
    </div>
  );
};

export default Contact;
