import React from "react";
import { Form, Formik } from "formik";
import textRadioLabel from "./textRadioLabel.json";
import { SIGN_UP_SCHEMA } from "../../../utils";
import InputWrapper from "../InputWrapper";
import RadioWrapper from "../RadioWrapper";
import styles from "./SignUpForm.module.scss";

const SignUpForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    role: "",
  };

  const onSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SIGN_UP_SCHEMA}
    >
      {(formikProps) => {
        return (
          <Form className={styles.signupForm}>
            <div className={styles.inputWrap}>
              <InputWrapper
                name="firstName"
                type="text"
                placeholder="First name"
              />
              <InputWrapper
                name="lastName"
                type="text"
                placeholder="Last name"
              />
              <InputWrapper
                name="displayName"
                type="text"
                placeholder="Display Name"
              />
              <InputWrapper
                name="email"
                type="email"
                placeholder="Email Address"
              />
              <InputWrapper
                name="password"
                type="password"
                placeholder="Password"
              />
              <InputWrapper
                name="passwordConfirm"
                type="password"
                placeholder="Password Confirm"
              />
              <RadioWrapper name="role" textRadioLabel={textRadioLabel} />
              <input
                className={styles.submit}
                type="submit"
                value="Create accaunt"
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
