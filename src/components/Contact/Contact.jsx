import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { setActiveContact } from "../../redux/contacts/slice";

import css from "./Contact.module.css";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  const handleEdit = () => {
    dispatch(setActiveContact({ name, number, id }));
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
