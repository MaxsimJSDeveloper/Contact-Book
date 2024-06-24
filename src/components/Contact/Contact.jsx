import { useDispatch } from "react-redux";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { setActiveContact } from "../../redux/contacts/slice";
import css from "./Contact.module.css";
import { Avatar, IconButton } from "@mui/material";
import { stringAvatar } from "../../js/utils";
import ModalEdit from "../ModalEdit/ModalEdit";

const Contact = ({ contact, modalOpenDelete }) => {
  const dispatch = useDispatch();

  const { id, name, number } = contact;

  const handleEdit = () => {
    dispatch(setActiveContact({ name, number, id }));
  };

  const handleDelete = () => {
    modalOpenDelete(id);
  };

  return (
    <div className={css.contact}>
      <Avatar
        {...stringAvatar(contact.name)}
        className={css.avatar}
        sx={{ width: 58, height: 58, ...stringAvatar(contact.name).sx }}
      />
      <div className={css.data}>
        <p className={css.info}>
          <FaUser className={css.infoIcon} /> {name}
        </p>
        <p className={css.info}>
          <FaPhoneAlt className={css.infoIcon} /> {number}
        </p>
      </div>
      <IconButton
        variant="outlined"
        type="button"
        style={{ padding: "5px" }}
        onClick={handleEdit}
      >
        <MdModeEdit className={css.pencil} />
      </IconButton>
      <IconButton
        variant="outlined"
        type="button"
        style={{ padding: "5px" }}
        onClick={handleDelete}
      >
        <MdDeleteForever className={css.bin} />
      </IconButton>
      <ModalEdit />
    </div>
  );
};

export default Contact;
