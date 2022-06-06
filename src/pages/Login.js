import React from "react";
import Authentication from "../layouts/Login-Register/Authentication";
import LoginCard from "../components/LoginCard";

function Login() {
  return (
      <Authentication loginOrRegister={<LoginCard buttonText={"SIGN IN"} />} />
  );
}

export default Login;
