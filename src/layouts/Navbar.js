import React, { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaCloudDownloadAlt } from "react-icons/fa";
import SocailLink from "../components/UI/SocailLink";
import ButtonLink from "../components/Buttons/ButtonLink";

function Navbar() {
  let [isScrollUp, setIsScrollUp] = useState(true);
  let [isTop, setIsTop] = useState(true);

  window.onscroll = function (e) {
    if (this.scrollY === 0) {
      setIsTop(true);
    }else {
      setIsTop(false);
    }
    setIsScrollUp(this.oldScroll > this.scrollY);
    this.oldScroll = this.scrollY;

    
  };

  function dropDown() {
    let dropDown = document.querySelector('.examples__drop');
    dropDown.classList.remove('disable');
    dropDown.classList.add('active');
  }

  function dropUp() {
    let dropUp = document.querySelector('.examples__drop');
    dropUp.classList.remove('active');
    dropUp.classList.add('disable');
  }

  return (
    <Header>
      <nav className={isTop ? "nav-bar" : isScrollUp ? "nav-bar sticky" : "nav-bar hide"}>
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
                    <span href="/">
                      <span>Components</span>
                    </span>
                  </li>
                  <li>
                    <span className={"examples"} onMouseEnter={dropDown} onMouseLeave={dropUp}>
                      <span>Examples</span>
                    </span>
                    <ul className="examples__drop disable">
                      <li><Link to="/landing">Landing</Link></li>
                      <li><Link to="/profile">Profile</Link></li>
                      <li><Link to="/login">Login</Link></li>
                      <li><Link to="/register">Register</Link></li>
                    </ul>
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
