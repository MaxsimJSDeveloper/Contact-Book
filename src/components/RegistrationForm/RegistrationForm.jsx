import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";
import toast from "react-hot-toast";
import { regist } from "../../js/validation";

import styles from "../formStyles/massage.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const id = useId();

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={regist}
      onSubmit={(values, actions) => {
        const newUser = {
          name: values.name.trim(),
          email: values.email.trim(),
          password: values.password.trim(),
        };
        dispatch(register(newUser))
          .unwrap()
          .then(() => {
            toast.success("Success!", { position: "top-center" });
          })
          .catch(() => {
            toast.error("Error, input correct data", {
              position: "top-center",
            });
          });
        actions.resetForm();
      }}
    >
      <Form className={styles.formContainer}>
        <label htmlFor={`${id}-n`}>Name</label>
        <Field
          type="text"
          name="name"
          id={`${id}-n`}
          className={styles.inputField}
        />
        <div className={styles.wrap}>
          <ErrorMessage
            name="name"
            component="span"
            className={styles.errorMessage}
          />
        </div>
        <label htmlFor={`${id}-e`}>Email</label>
        <Field
          type="email"
          name="email"
          id={`${id}-e`}
          className={styles.inputField}
        />
        <div className={styles.wrap}>
          <ErrorMessage
            name="email"
            component="span"
            className={styles.errorMessage}
          />
        </div>
        <label htmlFor={`${id}-p`}>Password</label>
        <Field
          type="password"
          name="password"
          id={`${id}-p`}
          className={styles.inputField}
        />
        <div className={styles.wrap}>
          <ErrorMessage
            name="password"
            component="span"
            className={styles.errorMessage}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
