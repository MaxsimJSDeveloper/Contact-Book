import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";
import { MdDeleteForever } from "react-icons/md";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.contact}>
      <div className={css.data}>
        <p className={css.contactName}>Name: {name}</p>
        <p className={css.contactNumber}>Number: {number}</p>
      </div>
      <button
        className={css.deleteButton}
        type="button"
        onClick={() => dispatch(handleDelete)}
      >
        <MdDeleteForever className={css.icon} />
      </button>
    </div>
  );
};

export default Contact;
