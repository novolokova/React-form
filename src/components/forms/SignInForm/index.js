import React from "react";
import { Form, Formik } from "formik";
import InputWrapper from "../InputWrapper";
import { SIGN_IN_SCHEMA } from "../../../utils";
import styles from "./SignInForm.module.scss";

const SignInForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.setFieldTouched();
    console.log(formikBag);
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues} 
      onSubmit={onSubmit} 
      validationSchema={SIGN_IN_SCHEMA}
    >
      {(formikProps) => {
        return (
          <Form className={styles.signinForm}>
            <InputWrapper
              name="email"
              type="email"
              placeholder="Email address"
            />
            <InputWrapper
              name="password"
              type="password"
              placeholder="Password"
            />
            <input className={styles.submit} type="submit" value="LOGIN" />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignInForm;
