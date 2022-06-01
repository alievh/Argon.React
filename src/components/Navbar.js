import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaCloudDownloadAlt } from "react-icons/fa";
import ButtonLink from "./ButtonLink";

function Navbar() {
  return (
    <Header>
      <nav className="nav-bar">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 d-flex align-items-center justify-content-center">
              <Link to="/">
                <img
                  className="nav-bar__logo"
                  src="https://demos.creative-tim.com/argon-design-system-angular/assets/img/brand/argon-white.png"
                  alt="Argon Logo"
                />
              </Link>
            </div>
            <div className="col-lg-10">
              <div className="nav-bar__menu">
                <ul className="menu-dropdown">
                  <li>
                    <a href="#">
                      <span>Components</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Examples</span>
                    </a>
                  </li>
                </ul>
                <ul className="menu-icons">
                  <li>
                    <a href="https://www.facebook.com/CreativeTim/" target="_blank">
                      <AiFillFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/accounts/login/?next=/creativetimofficial/" target="_blank">
                      <AiOutlineInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/creativetim" target="_blank">
                      <FaTwitterSquare />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/creativetimofficial/argon-design-system-angular?ref=adsa-navbar" target="_blank">
                      <AiFillGithub />
                    </a>
                  </li>
                  <li>
                    <ButtonLink
                      location={
                        "https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-navbar&_ga=2.125061129.2049681047.1653997155-370503823.1653470544"
                      }
                      icon={<FaCloudDownloadAlt />}
                      text={<span>Download</span>}
                      className="download-button"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Header>
  );
}

export default Navbar;
