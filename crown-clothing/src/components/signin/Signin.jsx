import React, { Component } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { auth, signInWithGoogle } from "../../firebase/firebase";
import { connect } from "react-redux";
import { signinToggle } from "../../redux/cart/cartAction";
import { signoutToggle } from "../../redux/cart/cartAction";

import "./Signin.scss";

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (e) {
      console.error(e);
    }
  };
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { signinToggle, signoutToggle } = this.props;
    return (
      <div className="sign-in">
        <div className="buttons-for-log">
          <CustomButton inverteda onClick={() => signinToggle()}>
            SIGN-IN
          </CustomButton>
          <CustomButton inverteda onClick={() => signoutToggle()}>
            SIGN-UP
          </CustomButton>
        </div>

        <span>Sign in with Email and Password</span>

        <form action="" onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  signinToggle: (user) => dispatch(signinToggle(user)),
  signoutToggle: (user) => dispatch(signoutToggle(user)),
});

export default connect(null, mapDispatchToProps)(Signin);
