import React from "react";
import "./signin-and-signup.scss";
import Signin from "../../components/signin/Signin";
import Signup from "../../components/signup/Signup";
import { connect } from "react-redux";
import { selectSignin } from "../../redux/cart/cartSelector";

const SigninAndSignup = ({ signin }) => (
  <div className="sign-in-and-sign-up">{signin ? <Signin /> : <Signup />}</div>
);
const mapStateToProps = (state) => ({
  signin: selectSignin(state),
});

export default connect(mapStateToProps)(SigninAndSignup);
