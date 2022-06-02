import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from './layouts/Navbar';

function Layouts() {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
}

export default Layouts;