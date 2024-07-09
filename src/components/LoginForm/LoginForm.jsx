import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";

import toast from "react-hot-toast";
import { login } from "../../js/validation";

import styles from "../formStyles/massage.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const mailFieldId = useId();
  const passwordFieldId = useId();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={login}
      onSubmit={(values, actions) => {
        const userData = {
          email: values.email,
          password: values.password,
        };
        dispatch(logIn(userData))
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
        <label htmlFor={mailFieldId}>Email</label>
        <Field
          type="email"
          name="email"
          id={mailFieldId}
          className={styles.inputField}
        />
        <div className={styles.wrap}>
          <ErrorMessage
            name="email"
            component="span"
            className={styles.errorMessage}
          />
        </div>

        <label htmlFor={passwordFieldId}>Password</label>
        <Field
          type="password"
          name="password"
          id={passwordFieldId}
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
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
