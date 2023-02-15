import React from "react";
import SignUpForm from "../components/forms/SignUpForm";

const SignUpPage = () => {
  const styleTitle={
    width: "45%",
    margin: "auto",
    marginBottom: "20px"
  }
  return (
    <>
      <h1>CREATE AN ACCOUNT</h1>
      <h2 style={styleTitle}>We always keep your name and email address private.</h2>
      <SignUpForm />
    </>
  );
};

export default SignUpPage;
