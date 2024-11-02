import toast from "react-hot-toast";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { editContact } from "../../redux/contacts/operations";
import { FeedbackSchema } from "../../js/validation";
import { handleKeyPress } from "../../js/handleKeyPress";

import Modal from "../Modal/Modal";

import css from "./ModalEdit.module.css";
import styles from "../formStyles/massage.module.css";

const ModalEdit = ({ open, close, contact }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    if (contact?.id) {
      dispatch(
        editContact({
          id: contact.id,
          name: values.username,
          number: values.number,
        })
      )
        .unwrap()
        .then(() => {
          toast.success("Successfully updated!", { position: "top-center" });
        })
        .catch(() => {
          toast.error("Error, input correct data", {
            position: "top-center",
          });
        });
      actions.resetForm();
      close();
    } else {
      toast.error("No active contact selected!", { position: "top-center" });
    }
  };

  const initialValues = {
    username: contact?.name || "",
    number: contact?.number || "",
  };

  return (
    <Modal isOpen={open} onClose={close}>
      <Formik
        initialValues={initialValues}
        validationSchema={FeedbackSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label className={css.label} htmlFor="username">
            Username
          </label>
          <Field
            className={css.inputField}
            type="text"
            name="username"
            id="username"
            variant="outlined"
          />
          <div className={styles.wrap}>
            <ErrorMessage
              name="username"
              component="div"
              className={styles.errorMessage}
            />
          </div>
          <label className={css.label} htmlFor="number">
            Phone
          </label>
          <Field
            type="text"
            pattern="\d*"
            onKeyPress={handleKeyPress}
            name="number"
            id="number"
            className={css.inputField}
          />
          <div className={styles.wrap}>
            <ErrorMessage
              name="number"
              component="div"
              className={styles.errorMessage}
            />
          </div>

          <div className={css.btnWrap}>
            <button
              type="button"
              onClick={close}
              className={`${css.btn} ${css.close}`}
            >
              Cancel
            </button>
            <button type="submit" className={`${css.btn} ${css.approved}`}>
              Save
            </button>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
};

export default ModalEdit;
