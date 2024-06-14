// src/components/Contact/Contact.jsx
import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import { setActiveContactId, toggleModal } from "../../redux/contacts/slice";

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
        <p className={css.contactName}>Name: {name}</p>
        <p className={css.contactNumber}>Number: {number}</p>
      </div>
      <button className={css.button} type="button" onClick={handleEdit}>
        <MdModeEdit className={css.pencil} />
      </button>
      <button className={css.button} type="button" onClick={handleDelete}>
        <MdDeleteForever className={css.icon} />
      </button>
    </div>
  );
};

export default Contact;
