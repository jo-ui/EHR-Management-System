import React, { Component } from "react";
import "./Signup.scss";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";
import { auth, createUserProfileDocument } from "../../firebase/firebase";
import { connect } from "react-redux";
import { signinToggle, signoutToggle } from "../../redux/cart/cartAction";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("password doesn't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
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
      <div className="sign-up">
        <div className="buttons-for-log">
          <CustomButton inverteda onClick={() => signinToggle()}>
            SIGN-IN
          </CustomButton>
          <CustomButton inverteda onClick={() => signoutToggle()}>
            SIGN-UP
          </CustomButton>
        </div>
        <span>Signup with email and password</span>
        <form className="sign-up-form" action="" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={this.state.displayName}
            onChange={this.handleChange}
            label="Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">sign up</CustomButton>
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
export default connect(null, mapDispatchToProps)(Signup);
