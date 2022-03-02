import React from "react";
import "./signin-and-signup.scss";
import Signin from "../../components/signin/Signin";
import Signup from "../../components/signup/Signup";

const SigninAndSignup = () => (
  <div className="sign-in-and-sign-up">
    <Signin />
    <Signup />
  </div>
);
export default SigninAndSignup;
