import { useDispatch } from "react-redux";
import { BsTrash, BsPencilSquare } from "react-icons/bs";
import { setActiveContact } from "../../redux/contacts/slice";

import { Avatar, IconButton } from "@mui/material";
import { stringAvatar } from "../../js/utils";
import ModalEdit from "../ModalEdit/ModalEdit";

import css from "./Contact.module.css";

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
    <>
      <Avatar
        {...stringAvatar(contact.name)}
        className={css.avatar}
        sx={{
          width: 74,
          height: 74,
          fontSize: 24,
          ...stringAvatar(contact.name).sx,
        }}
      />
      <div className={css.data}>
        <p className={css.info}> {name}</p>
        <p className={css.number}> {number}</p>
      </div>
      <IconButton
        variant="outlined"
        type="button"
        style={{ padding: "12px" }}
        onClick={handleEdit}
      >
        <BsPencilSquare className={css.pencil} />
      </IconButton>
      <IconButton
        variant="outlined"
        type="button"
        style={{ padding: "12px" }}
        onClick={handleDelete}
      >
        <BsTrash className={css.bin} />
      </IconButton>
      <ModalEdit />
    </>
  );
};

export default Contact;
