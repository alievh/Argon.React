import React from 'react';
import Authentication from '../layouts/Login-Register/Authentication';
import RegisterCard from '../components/RegisterCard';

function Register() {
  return (
    <Authentication loginOrRegister={<RegisterCard buttonText={"CREATE ACCOUNT"} />} />
  )
}

export default Register;