import React from "react";
import ButtonLink from "../../components/Buttons/ButtonLink";
import Separator from "../../components/UI/Separator";
import LoginCard from "../../components/LoginCard";

function LoginRegister() {
  return (
    <section className="login-register">
      <div className="container py-64p">
        <div className="row justify-content-between aling-items-center">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h3>
              A beautiful Design System <span>completed with examples</span>
            </h3>
            <p className="mb-2">
              The Design System comes with four pre-built pages to help you get
              started faster. You can change the text and images and you're good
              to go. More importantly, looking at them will give you a picture
              of what you can built with this powerful Bootstrap 4 Design
              System.
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
          <div className="col-lg-5">
            <div className="authentication">
              <LoginCard buttonText={"SIGN IN"} />
            </div>
          </div>
        </div>
      </div>
      <Separator />
    </section>
  );
}

export default LoginRegister;
