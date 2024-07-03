import css from "./ContactForm.module.css";

import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";

import toast from "react-hot-toast";

import { addContact } from "../../redux/contacts/operations";
import { FeedbackSchema } from "../../js/validation";
import { handleKeyPress } from "../../js/handleKeyPress";

const ContactForm = () => {
  const id = useId();

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ username: "", number: "" }}
      validationSchema={FeedbackSchema}
      onSubmit={(values, actions) => {
        const newContact = {
          name: values.username,
          number: values.number,
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
        <div className={css.wrap}>
          <Field
            type="text"
            name="username"
            id={`${id}-n`}
            className={css.inputField}
          />
          <ErrorMessage
            name="username"
            component="span"
            className={css.errorMessage}
          />
        </div>

        <label htmlFor={`${id}-p`}>Phone</label>
        <div className={css.wrap}>
          <Field
            type="text"
            pattern="\d*"
            onKeyPress={handleKeyPress}
            name="number"
            id={`${id}-p`}
            className={css.inputField}
          />
          <ErrorMessage
            name="number"
            component="span"
            className={css.errorMessage}
          />
        </div>

        <button type="submit" className={css.submitButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
