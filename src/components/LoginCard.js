import React from "react";
import ButtonLink from "./Buttons/ButtonLink";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { HiMail } from "react-icons/hi";
import { GiPadlockOpen } from "react-icons/gi";
import Button from "./Buttons/Button";
import { useNavigate } from "react-router-dom";
import { getFullName } from "../layouts/Profile/UserInfo";

function Login({ buttonText }) {
  let navigate = useNavigate();

  function getUserInfo(e) {
    e.preventDefault();
    e.stopPropagation();
    const form = document.querySelector(".form");
    const formData = new FormData(form);
    let isLogged = false;

    for (let i = 0; i < localStorage.length; i++) {
      const newUser = JSON.parse(localStorage.getItem(formData.get("email")));
      if (
        formData.get("email") === newUser["email"] &&
        formData.get("password") === newUser["password"]
      ) {
        sessionStorage.setItem("loggedUser", JSON.stringify(newUser));
        getFullName();
        isLogged = true;
        navigate("/profile");
      }
    }

    if (isLogged === false) {
      alert("Email or Password is invalid");
    }
  }

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
        <form className="form" onSubmit={getUserInfo}>
          <div className="input-group mb-3">
            <HiMail />
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              aria-label="Email"
            />
          </div>
          <div className="input-group mb-3">
            <GiPadlockOpen />
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              aria-label="Password"
            />
          </div>
          <div className="remember">
            <div className="form-check d-flex align-items-center">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
              />
              <label htmlFor="flexCheckDefault">Remember me</label>
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

export default Login;
