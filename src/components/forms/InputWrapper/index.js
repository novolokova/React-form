import React from "react";
import { ErrorMessage, Field } from "formik";
import cx from "classnames";
import styles from "./InputWrapper.module.scss";

const InputWrapper = (props) => {
  const { name, className, ...rest } = props;
  return (
    <label >
      <Field name={name}>
        {({ field, form, meta }) => {
          const validStyle = cx(styles.input, {
            [styles.valid]: meta.touched && !meta.error,
            [styles.invalid]: meta.touched && meta.error,
          });
          return <input {...field} className={validStyle} {...rest} />;
        }}
      </Field>
      <ErrorMessage name={name} component="span" />
    </label>
  );
};

export default InputWrapper;


