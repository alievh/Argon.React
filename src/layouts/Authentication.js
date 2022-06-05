import React from "react";
import Support from "./Support";
import LoginCard from "./Login/LoginCard";

function Authentication({ loginOrRegister }) {
  return (
    <>
      <section className="authentication py-96p">
        <div className="container pt-64p">
          <div className="row justify-content-center">
            <div className="col-lg-5">{loginOrRegister}</div>
          </div>
        </div>
      </section>
      <Support />
    </>
  );
}

export default Authentication;
