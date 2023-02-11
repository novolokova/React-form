import * as Yup from "yup";

export const NAME_SCHEMA = Yup.string()
  .trim()
  .min(2, "Must be more 2 letters")
  .max(16, "Must be less 16 letters")
  .matches(/^[A-Z][a-z]{4,15}$/, "Must be only latin letter")
  .required("Required!");

export const EMAIL_SCHEMA = Yup.string().trim().email().required("Required!");

export const PASS_SCHEMA = Yup.string()
  .min(8, "Must be more 8 symbols")
  .max(20, "Must be less 20 symbols")
  .matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,20}$/,
    "Check your password"
  )
  .required("Required!");

export const SIGN_UP_SCHEMA = Yup.object({
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  displayName: Yup.string()
    .trim()
    .min(5, "Must be more 5 letters")
    .max(10, "Must be less 10 letters"),
  email: EMAIL_SCHEMA,
  password: PASS_SCHEMA,
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password")])
    .required(),
  role: Yup.string()
    .oneOf(["buyer", "creative"])
    .required("Selecting the field is required"),
});

export const SIGN_IN_SCHEMA = Yup.object({
  email: EMAIL_SCHEMA,
  password: PASS_SCHEMA,
});

//gr3at@3wdsG   oi6yy#g9rvD
