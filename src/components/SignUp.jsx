import React from "react";

import InputGroup from "./InputGroup";
import Button from "./Button";

function SignUP() {
  return (
    <form className="w-25 d-flex flex-column gap-2 bg-light shadow rounded p-4">
      <h1 className="h3 mb-3 fw-normal text-center text-primary">
        Please Sign Up
      </h1>
      <InputGroup
        label="signUpName"
        type="text"
        value="Arjun"
        command="Enter your name"
      />
      <InputGroup
        label="signUpEmail"
        type="email"
        value="abc@gmail.com"
        command="Enter your email"
      />
      <InputGroup
        label="newPassword"
        type="password"
        value="password"
        command="Enter new password"
      />
      <InputGroup
        label="confirmPassword"
        type="password"
        value="password"
        command="Confirm your password"
      />
      <Button value="Sign Up" />
    </form>
  );
}

export default SignUP;
