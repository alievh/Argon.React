import React from "react";
import ButtonLink from "../components/ButtonLink";
import { AiFillGithub } from "react-icons/ai";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Separator from "../components/Separator";

function Intro() {
  return (
    <section className="intro">
      <div className="container py-96p">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 d-flex flex-column align-items-center">
            <img
              className="intro__logo"
              src="https://demos.creative-tim.com/argon-design-system-angular/assets/img/brand/argon-white.png"
              alt="Intro Logo"
            />
            <p className="intro__content">
              A beautiful Design System for Bootstrap 4 and Angular 7. It's Free
              and Open Source.
            </p>
            <div className="intro-buttons mt-4">
              <ButtonLink
                className={"intro-buttons__download me-2"}
                location={
                  "https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-navbar&_ga=2.125061129.2049681047.1653997155-370503823.1653470544"
                }
                icon={<FaCloudDownloadAlt />}
                text={<span>Download Angular</span>}
              />
              <ButtonLink
                className={"intro-buttons__github"}
                location={
                  "https://github.com/creativetimofficial/argon-design-system-angular?ref=adsa-index-header"
                }
                icon={<AiFillGithub />}
                text={
                  <span>
                    <span>Start Us</span> on Github
                  </span>
                }
              />
            </div>
            <div className="intro__footer-content mt-5 d-flex align-items-center">
              <small className="me-2">*proudly coded by</small>
              <img
                src="https://demos.creative-tim.com/argon-design-system-angular/assets/img/brand/creativetim-white-slim.png"
                height="28px"
                alt="Avatar"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <Separator />
    </section>
  );
}

export default Intro;
