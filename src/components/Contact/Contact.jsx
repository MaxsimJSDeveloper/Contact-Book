import { useDispatch, useSelector } from "react-redux";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import {
  setActiveContact,
  clearActiveContact,
} from "../../redux/contacts/slice";
import css from "./Contact.module.css";
import { IconButton } from "@mui/material";

const Contact = ({ contact, modalOpenDelete }) => {
  const dispatch = useDispatch();

  const { id, name, number } = contact;

  const isModalOpen = useSelector((state) => state.contacts.isModalOpen);

  const handleEdit = () => {
    if (!isModalOpen) {
      dispatch(setActiveContact({ name, number, id }));
    } else {
      dispatch(clearActiveContact());
    }
  };

  const handleDelete = () => {
    modalOpenDelete(id);
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
      <IconButton variant="outlined" type="button" onClick={handleDelete}>
        <MdDeleteForever className={css.bin} />
      </IconButton>
    </div>
  );
};

export default Contact;
