import React, { Component } from "react";
import { auth, createUserProfileDocument } from "../../utils/firebase";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import CustomAlert from "../CustomAlert/CustomAlert";
import "./SignUp.scss";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      alert: false,
      alertText: "",
      alertType: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      this.setState({
        alert: true,
        alertText: "Password does not match!",
        alertType: "danger",
      });
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (user) {
        this.setState({
          alert: true,
          alertText:
            "Registration has been completed successfully. You can login.",
          alertType: "success",
        });
        await createUserProfileDocument(user, { displayName });
      }

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
        alert: false,
        alertText: "",
        alertType: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleCloseAlert = (e) => {
    this.setState({
      alert: false,
      alertText: "",
      alertType: "",
    });
  };

  render() {
    const {
      displayName,
      email,
      password,
      confirmPassword,
      alert,
      alertText,
      alertType,
    } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit"> SIGN UP </CustomButton>
        </form>
        {alert ? (
          <CustomAlert
            text={alertText}
            type={alertType}
            positionX="right"
            positionY="bottom"
            visible
            handleClick={this.handleCloseAlert}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default SignUp;
