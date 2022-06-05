import React from 'react';
import Authentication from '../layouts/Authentication';
import LoginCard from '../layouts/Login/LoginCard';

function Login() {
  return (
    <Authentication loginOrRegister={<LoginCard buttonText={"SIGN IN"} />} />
  )
}

export default Login;