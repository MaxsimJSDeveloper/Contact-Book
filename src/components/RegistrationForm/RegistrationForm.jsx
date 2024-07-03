import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";
import toast from "react-hot-toast";
import { regist } from "../../js/validation";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const id = useId();

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={regist}
      onSubmit={(values, actions) => {
        const newUser = {
          name: values.name,
          email: values.email,
          password: values.password,
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
      <Form className={css.formContainer}>
        <label htmlFor={`${id}-n`}>Name</label>
        <div className={css.wrap}>
          <Field
            type="text"
            name="name"
            id={`${id}-n`}
            className={css.inputField}
          />
          <ErrorMessage
            name="name"
            component="span"
            className={css.errorMessage}
          />
        </div>
        <label htmlFor={`${id}-e`}>Email</label>
        <div className={css.wrap}>
          <Field
            type="email"
            name="email"
            id={`${id}-e`}
            className={css.inputField}
          />
          <ErrorMessage
            name="email"
            component="span"
            className={css.errorMessage}
          />
        </div>
        <label htmlFor={`${id}-p`}>Password</label>
        <div className={css.wrap}>
          <Field
            type="password"
            name="password"
            id={`${id}-p`}
            className={css.inputField}
          />
          <ErrorMessage
            name="password"
            component="span"
            className={css.errorMessage}
          />
        </div>
        <button type="submit" className={css.submitButton}>
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
