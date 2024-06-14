// src/components/EditContactForm/EditContactForm.jsx
import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import { FeedbackSchema } from "../../validation";

import css from "./EditContactForm.module.css";
import {
  selectActiveContactId,
  selectContacts,
  selectIsModalOpen,
} from "../../redux/contacts/selectors";
import { clearActiveContactId, toggleModal } from "../../redux/contacts/slice";

const EditContactForm = () => {
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const isOpen = useSelector(selectIsModalOpen);
  const activeContactId = useSelector(selectActiveContactId);
  const contacts = useSelector(selectContacts);

  const activeContact =
    contacts.find((contact) => contact.id === activeContactId) || {};

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      editContact({
        id: activeContactId,
        name: values.username,
        number: values.number,
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Successfully updated!", { position: "top-center" });
        dispatch(clearActiveContactId());
        dispatch(toggleModal());
      })
      .catch(() => {
        toast.error("Error, input correct data", {
          position: "top-center",
        });
      });
    actions.resetForm();
  };

  return isOpen ? (
    <Formik
      initialValues={{
        username: activeContact.name || "",
        number: activeContact.number || "",
      }}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.formContainer}>
        <label htmlFor={nameFieldId} className={css.label}>
          Username
        </label>
        <Field
          type="text"
          name="username"
          id={nameFieldId}
          className={css.inputField}
        />
        <ErrorMessage
          name="username"
          component="span"
          className={css.errorMessage}
        />

        <label htmlFor={phoneFieldId} className={css.label}>
          Phone
        </label>
        <Field
          type="text"
          name="number"
          id={phoneFieldId}
          className={css.inputField}
        />
        <ErrorMessage
          name="number"
          component="span"
          className={css.errorMessage}
        />

        <button type="submit" className={css.submitButton}>
          Edit
        </button>
      </Form>
    </Formik>
  ) : null;
};

export default EditContactForm;
