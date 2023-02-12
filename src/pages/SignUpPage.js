import React from "react";
import SignUpForm from "../components/forms/SignUpForm";

const SignUpPage = () => {
  return (
    <>
      <h1>CREATE AN ACCOUNT</h1>
      <h2 style={{ width: "45%", margin: "auto", marginBottom: "20px"}}>We always keep your name and email address private.</h2>
      <SignUpForm />
    </>
  );
};

export default SignUpPage;
