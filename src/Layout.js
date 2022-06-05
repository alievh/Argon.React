import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./layouts/Navbar";

function Layouts() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layouts;
