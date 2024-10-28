import { Field, Form, Formik, ErrorMessage } from "formik";
import toast from "react-hot-toast";

import { useId, useState } from "react";
import { useDispatch } from "react-redux";

import { logIn } from "../../redux/auth/operations";
import { login } from "../../js/validation";

import styles from "../formStyles/massage.module.css";
import { LuEye, LuEyeOff } from "react-icons/lu";

const LoginForm = () => {
  const dispatch = useDispatch();

  const id = useId();

  const [isVisible, setIsVisible] = useState(false);

  function changeVisible() {
    setIsVisible(!isVisible);
  }

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={login}
      onSubmit={(values, actions) => {
        const userData = {
          email: values.email.trim(),
          password: values.password.trim(),
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
        <label htmlFor={`${id}-e`}>Email</label>
        <Field
          type="email"
          name="email"
          id={`${id}-e`}
          className={styles.inputField}
          autoComplete="email"
        />
        <div className={styles.wrap}>
          <ErrorMessage
            name="email"
            component="span"
            className={styles.errorMessage}
          />
        </div>

        <label htmlFor={`${id}-p`}>Password</label>
        <div className={styles.passwordInputWrap}>
          <Field
            type={isVisible ? "text" : "password"}
            name="password"
            id={`${id}-p`}
            className={styles.inputField}
            autoComplete="current-password"
          />
          <button
            className={styles.changeVisibleBtn}
            type="button"
            onClick={changeVisible}
          >
            {isVisible ? (
              <LuEyeOff className={styles.iconEye} />
            ) : (
              <LuEye className={styles.iconEye} />
            )}
          </button>
        </div>
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
