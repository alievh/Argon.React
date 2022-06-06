import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";

function Layouts() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Layouts;
