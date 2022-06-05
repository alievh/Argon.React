import React from 'react';
import Authentication from '../layouts/Authentication';
import RegisterCard from '../layouts/Register/RegisterCard';

function Register() {
  return (
    <Authentication loginOrRegister={<RegisterCard buttonText={"CREATE ACCOUNT"} />} />
  )
}

export default Register;