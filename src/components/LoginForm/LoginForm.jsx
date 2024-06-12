import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";

const FeedbackSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const mailFieldId = useId();
  const passwordFieldId = useId();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={FeedbackSchema}
      onSubmit={(values, actions) => {
        const userData = {
          email: values.email,
          password: values.password,
        };
        dispatch(logIn(userData));
        actions.resetForm();
      }}
    >
      <Form className={css.formContainer}>
        <label htmlFor={mailFieldId} className={css.label}>
          Email
        </label>
        <Field
          type="text"
          name="email"
          id={mailFieldId}
          className={css.inputField}
        />
        <ErrorMessage
          name="email"
          component="span"
          className={css.errorMessage}
        />

        <label htmlFor={passwordFieldId} className={css.label}>
          Password
        </label>
        <Field
          type="text"
          name="password"
          id={passwordFieldId}
          className={css.inputField}
        />
        <ErrorMessage
          name="password"
          component="span"
          className={css.errorMessage}
        />

        <button type="submit" className={css.submitButton}>
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
