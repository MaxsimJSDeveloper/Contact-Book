import { Field, Form, Formik, ErrorMessage } from "formik";
import toast from "react-hot-toast";

import { useId } from "react";
import { useDispatch } from "react-redux";

import { addContact } from "../../redux/contacts/operations";
import { FeedbackSchema } from "../../js/validation";
import { handleKeyPress } from "../../js/handleKeyPress";

import styles from "../formStyles/massage.module.css";
import css from "./ContactForm.module.css";

const ContactForm = ({ close }) => {
  const id = useId();

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ username: "", number: "" }}
      validationSchema={FeedbackSchema}
      onSubmit={(values, actions) => {
        const newContact = {
          name: values.username.trim(),
          number: values.number.trim(),
        };
        dispatch(addContact(newContact))
          .unwrap()
          .then(() => {
            toast.success("Successfully add!", { position: "top-center" });
          })
          .catch(() => {
            toast.error("Error, input correct data", {
              position: "top-center",
            });
          });
        actions.resetForm();
      }}
    >
      <Form className={css.formContainer}>
        <label htmlFor={`${id}-n`}>Username</label>
        <Field
          type="text"
          name="username"
          id={`${id}-n`}
          className={css.inputField}
        />
        <div className={styles.wrap}>
          <ErrorMessage
            name="username"
            component="span"
            className={styles.errorMessage}
          />
        </div>

        <label htmlFor={`${id}-p`}>Phone</label>
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
            component="span"
            className={styles.errorMessage}
          />
        </div>

        <button onClick={close} type="submit" className={css.submitButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
