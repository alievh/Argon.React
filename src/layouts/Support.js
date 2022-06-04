import React from "react";
import SocailLink from "../components/SocailLink";
import {
  FaTwitter,
  FaFacebookSquare,
  FaDribbble,
  FaGithub,
} from "react-icons/fa";
import Links from "../components/Links";

function Support() {
  return (
    <div className="container support">
      <div className="row my-64p align-items-center">
        <div className="col-lg-6">
          <h3 className="mb-3">Thank you for supporting us!</h3>
          <h4>Let's get in touch on any of these platforms.</h4>
        </div>
        <div className="col-lg-6 d-flex justify-content-center footer-links">
          <ul className="d-flex">
            <li>
              <SocailLink
                className={"footer-links__twitter"}
                link={"https://twitter.com/creativetim"}
                target={"_blank"}
                content={<FaTwitter />}
              />
            </li>
            <li>
              <SocailLink
                className={"footer-links__facebook"}
                link={"https://www.facebook.com/CreativeTim/"}
                target={"_blank"}
                content={<FaFacebookSquare />}
              />
            </li>
            <li>
              <SocailLink
                className={"footer-links__dribbble"}
                link={"https://dribbble.com/creativetim"}
                target={"_blank"}
                content={<FaDribbble />}
              />
            </li>
            <li>
              <SocailLink
                className={"footer-links__github"}
                link={"https://github.com/creativetimofficial"}
                target={"_blank"}
                content={<FaGithub />}
              />
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-4" />
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="copyright">
            <span>
              © 2022
              <Links
                className={"btn btn-link text-primary"}
                content={"Creative Tim"}
                link={
                  "https://www.creative-tim.com/?ref=adsa-footer&_ga=2.234555165.2049681047.1653997155-370503823.1653470544"
                }
              />
              .
            </span>
          </div>
        </div>
        <div className="col-md-6">
          <ul className="d-flex justify-content-end">
            <li>
              <Links
                className={"btn btn-link text-gray"}
                content={"Creative Tim"}
                link={
                  "https://github.com/creativetimofficial/argon-design-system-angular/blob/master/LICENSE.md"
                }
              />
            </li>
            <li>
              <Links
                className={"btn btn-link text-gray"}
                content={"About us"}
                link={
                  "https://www.creative-tim.com/blog/?ref=adsa-footer&_ga=2.133761677.2049681047.1653997155-370503823.1653470544"
                }
              />
            </li>
            <li>
              <Links
                className={"btn btn-link text-gray"}
                content={"Blog"}
                link={
                  "https://www.creative-tim.com/presentation?ref=adsa-footer&_ga=2.133761677.2049681047.1653997155-370503823.1653470544"
                }
              />
            </li>
            <li>
              <Links
                className={"btn btn-link text-gray"}
                content={"MIT License"}
                link={
                  "https://www.creative-tim.com/?ref=adsa-footer&_ga=2.133761677.2049681047.1653997155-370503823.1653470544"
                }
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Support;
