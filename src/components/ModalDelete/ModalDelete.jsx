import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

import Modal from "../Modal/Modal";
import css from "./ModalDelete.module.css";

const ModalDelete = ({ open, close, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    close();
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success("Contact deleted!", { position: "top-center" });
      })
      .catch(() => {
        toast.error("Error, try again!", {
          position: "top-center",
        });
      });
  };

  return (
    <Modal isOpen={open} onClose={close}>
      <div className={css.modalWrap}>
        <h3 className={css.title}>Confirm Deletion</h3>
        <p>Are you sure you want to delete this contact?</p>

        <div className={css.btnWrap}>
          <button onClick={close} variant="outlined" className={css.close}>
            Cancel
          </button>
          <button
            onClick={handleDelete}
            variant="contained"
            className={css.delete}
            autoFocus
          >
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalDelete;
