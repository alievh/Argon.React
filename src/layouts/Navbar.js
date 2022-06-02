import React, { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaCloudDownloadAlt } from "react-icons/fa";
import SocailLink from "../components/SocailLink";
import ButtonLink from "../components/ButtonLink";

function Navbar() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    scrollTo(0, 0)
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <Header>
      <nav className={colorChange ? "nav-bar sticky" : "nav-bar"}>
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
                    <SocailLink
                      link={"https://www.facebook.com/CreativeTim/"}
                      target={"_blank"}
                      content={<AiFillFacebook />}
                    />
                  </li>
                  <li>
                    <SocailLink
                      link={
                        "https://www.instagram.com/accounts/login/?next=/creativetimofficial/"
                      }
                      target={"_blank"}
                      content={<AiOutlineInstagram />}
                    />
                  </li>
                  <li>
                    <SocailLink
                      link={"https://twitter.com/creativetim"}
                      target={"_blank"}
                      content={<FaTwitterSquare />}
                    />
                  </li>
                  <li>
                    <SocailLink
                      link={
                        "https://github.com/creativetimofficial/argon-design-system-angular?ref=adsa-navbar"
                      }
                      target={"_blank"}
                      content={<AiFillGithub />}
                    />
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
