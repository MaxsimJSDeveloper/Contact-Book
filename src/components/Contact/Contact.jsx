import { useState } from "react";
import { BsTrash, BsPencilSquare } from "react-icons/bs";
import { Avatar, IconButton } from "@mui/material";
import { stringAvatar } from "../../js/utils";
import ModalDelete from "../ModalDelete/ModalDelete";
import ModalEdit from "../ModalEdit/ModalEdit";

import css from "./Contact.module.css";

const Contact = ({ contact }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const { id, name, number } = contact;

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      <Avatar
        {...stringAvatar(contact.name)}
        className={css.avatar}
        sx={{
          width: 62,
          height: 62,
          fontSize: 20,
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
        style={{ padding: "8px" }}
        onClick={openEditModal}
      >
        <BsPencilSquare className={css.pencil} />
      </IconButton>
      <IconButton
        variant="outlined"
        type="button"
        style={{ padding: "8px" }}
        onClick={openDeleteModal}
      >
        <BsTrash className={css.bin} />
      </IconButton>
      <ModalDelete open={isDeleteModalOpen} close={closeDeleteModal} id={id} />
      <ModalEdit
        open={isEditModalOpen}
        close={closeEditModal}
        contact={contact}
      />
    </>
  );
};

export default Contact;
