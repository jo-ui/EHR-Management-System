import React from "react";
import "./Custom-Button.scss";

const CustomButton = ({
  children,
  inverted,
  inverteda,
  isGoogleSignIn,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverteda ? "inverted2" : ""} ${
        inverted ? "inverted" : ""
      } ${isGoogleSignIn ? "is-google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
