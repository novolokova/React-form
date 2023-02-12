import React from "react";
import { Field, ErrorMessage } from "formik";
import styles from "./RadioWrapper.module.scss";

const RadioWrapper = (props) => {
  const { name, textRadioLabel } = props;
  return (
    <div className={styles.fieldsContainer}>
      {textRadioLabel.map((item, index) => (
        <div>
          <label className={styles.label} key={index}>
            <Field
              name={name}
              value={item.role}
              type="radio"
              className={styles.radio}
            />
            <article className={styles.article}>
              <div className={styles.h3}>{item.h3}</div>
              <div className={styles.p}>{item.p}</div>
            </article>
          </label>
        </div>
      ))}
      <ErrorMessage name={name} component="span" className={styles.tooltip} />
    </div>
  );
};

export default RadioWrapper;

//gr3at@3wdsG   oi6yy#g9rvD
