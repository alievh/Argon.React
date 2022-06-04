import React from "react";
import ButtonLink from "../components/ButtonLink";
import Separator from "../components/Separator";

function LoginRegister() {
  return (
    <section className="login-register">
      <div className="container py-64p">
        <div className="row">
          <div className="col-lg-6">
            <h3>A beautiful Design System <span>completed with examples</span></h3>
            <p className="mb-2">
              The official package contains over 21.000 icons which are looking
              great in combination with Argon Design System. Make sure you check
              all of them and use those that you like the most.
            </p>
            <div className="btn-wrapper mt-5">
              <ButtonLink
                className={"btn btn-success me-2"}
                location={
                  "https://demos.creative-tim.com/argon-design-system-angular/#/home"
                }
                text={"LOGIN PAGE"}
              />
              <ButtonLink
                className={"btn btn-light"}
                location={"https://nucleoapp.com/?ref=1712"}
                text={"REGISTER PAGE"}
              />
            </div>
          </div>
          <div className="col-lg-5"></div>
        </div>
      </div>
      <Separator />
    </section>
  );
}

export default LoginRegister;
