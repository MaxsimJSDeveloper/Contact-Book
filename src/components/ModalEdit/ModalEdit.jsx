import { Dialog } from "@mui/material";
import toast from "react-hot-toast";
import { ErrorMessage, Field, Form, Formik } from "formik";

import { useDispatch, useSelector } from "react-redux";
import { editContact } from "../../redux/contacts/operations";
import { clearActiveContact } from "../../redux/contacts/slice";
import {
  selectActiveContact,
  selectIsOpen,
} from "../../redux/contacts/selectors";

import { useId } from "react";
import { FeedbackSchema } from "../../js/validation";
import { handleKeyPress } from "../../js/handleKeyPress";

import css from "./ModalEdit.module.css";
import styles from "../formStyles/massage.module.css";

const ModalEdit = () => {
  const dispatch = useDispatch();

  const activeContact = useSelector(selectActiveContact);
  const isOpen = useSelector(selectIsOpen);

  const id = useId();

  const handleSubmit = (values, actions) => {
    if (activeContact) {
      dispatch(
        editContact({
          id: activeContact.id,
          name: values.username,
          number: values.number,
        })
      )
        .unwrap()
        .then(() => {
          toast.success("Successfully updated!", { position: "top-center" });
          dispatch(clearActiveContact());
        })
        .catch(() => {
          toast.error("Error, input correct data", {
            position: "top-center",
          });
        });
      actions.resetForm();
    } else {
      toast.error("No active contact selected!", { position: "top-center" });
    }
  };

  if (!activeContact) return null;

  const initialValues = {
    username: activeContact.name || "",
    number: activeContact.number || "",
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => dispatch(clearActiveContact())}
      BackdropProps={{
        style: {
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        },
      }}
      PaperProps={{
        sx: {
          borderRadius: "28px",
          padding: 0,
        },
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={FeedbackSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.formContainer}>
          <label className={css.label} htmlFor={`${id}-n`}>
            Username
          </label>
          <Field
            className={css.inputField}
            type="text"
            name="username"
            id={`${id}-n`}
            variant="outlined"
          />
          <div className={styles.wrap}>
            <ErrorMessage
              name="username"
              component="div"
              className={styles.errorMessage}
            />
          </div>

          <label className={css.label} htmlFor={`${id}-p`}>
            Phone
          </label>
          <Field
            type="text"
            pattern="\d*"
            onKeyPress={handleKeyPress}
            name="number"
            id={`${id}-p`}
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
              onClick={() => dispatch(clearActiveContact())}
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
    </Dialog>
  );
};

export default ModalEdit;
