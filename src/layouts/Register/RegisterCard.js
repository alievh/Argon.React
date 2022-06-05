import React from "react";
import ButtonLink from "../../components/ButtonLink";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { HiMail } from "react-icons/hi";
import { GiPadlockOpen } from "react-icons/gi";
import { GiGraduateCap } from "react-icons/gi";
import Button from "../../components/Button";

function RegisterCard({buttonText}) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="mb-3">
          <small>Sign in with</small>
        </div>
        <div className="btn-wrapper">
          <ButtonLink
            className={"btn btn-light me-2"}
            location={"#"}
            text={"GITHUB"}
            icon={<FaGithub />}
          />
          <ButtonLink
            className={"btn btn-light me-2"}
            location={"#"}
            text={"GOOGLE"}
            icon={<FcGoogle />}
          />
        </div>
      </div>
      <div className="card-body px-lg-5 py-lg-5">
        <div className="mb-3">
          <small>Or sign in with credentials</small>
        </div>
        <form className="form">
          <div className="input-group mb-3">
            <GiGraduateCap />
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              aria-label="Name"
            />
          </div>
          <div className="input-group mb-3">
            <HiMail />
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              aria-label="Email"
            />
          </div>
          <div className="input-group mb-3">
            <GiPadlockOpen />
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              aria-label="Password"
            />
          </div>
          <div className="remember privacy">
            <div className="form-check d-flex align-items-center">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
              />
              <label htmlFor="flexCheckDefault"><a href="">I agree with the <span>Privacy Policy</span></a></label>
            </div>
          </div>
          <div>
            <Button
              className={"btn btn-primary my-4"}
              type={"submit"}
              content={buttonText}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterCard;
