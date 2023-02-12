import * as Yup from "yup";

export const NAME_SCHEMA = Yup.string()
  .trim()
  .matches(/^[A-Z]/, "Must be first capital letter")
  .min(2, "Must be more 2 letters")
  .max(16, "Must be less 16 letters")
  .matches(/[a-z]{4,15}$/, "Must be only one capital letter or latin letters")
  .required("Required field");

export const EMAIL_SCHEMA = Yup.string().trim().email().required("Required field");

export const PASS_SCHEMA = Yup.string()
  .min(6, "Must be more 8 symbols")
  .max(15, "Must be less 15 symbols")
  .matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,20}$/,
    "Password is too simple EXSAMPLE: gr3at@3wdsG "
  )
  .required("Required field");

export const SIGN_UP_SCHEMA = Yup.object({
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  displayName: Yup.string()
    .trim()
    .min(5, "Must be more 5 letters")
    .max(10, "Must be less 10 letters")
    .required("Required field"),
  email: EMAIL_SCHEMA,
  password: PASS_SCHEMA,
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password")], "Password is incorrect")
    .required("Required field"),
  role: Yup.string()
    .oneOf(["buyer", "creative"])
    .required("Selecting the field is required"),
});

export const SIGN_IN_SCHEMA = Yup.object({
  email: EMAIL_SCHEMA,
  password: PASS_SCHEMA,
});

//gr3at@3wdsG   oi6yy#g9rvD
