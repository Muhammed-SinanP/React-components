import React from "react";

import InputGroup from "./InputGroup";
import Button from "./Button";

function Login() {
  return (
    <form className="w-25 d-flex flex-column gap-2 bg-light shadow rounded p-4">
      <h1 className="h3 mb-3 fw-normal text-center text-primary">
        Please Login
      </h1>
      <InputGroup
        label="loginName"
        type="text"
        value="Arjun"
        command="Enter your name"
      />
      <InputGroup
        label="loginEmail"
        type="email"
        value="abc@gmail.com"
        command="Enter your email"
      />
      <InputGroup
        label="password"
        type="password"
        value="password"
        command="Enter your password"
      />

      <Button value="Login" />
    </form>
  );
}

export default Login;
