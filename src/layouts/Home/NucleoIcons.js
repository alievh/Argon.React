import React from "react";
import ButtonLink from "../../components/Buttons/ButtonLink";
import Heading from "../../components/UI/Heading";
import {
  RiVipDiamondFill,
  RiBankCardFill,
  RiShoppingBag3Fill,
  RiBuildingFill,
  RiBarChart2Fill
} from "react-icons/ri";
import { FaPlay, FaReact, FaBell } from "react-icons/fa";
import { GiHandBag, GiCube } from "react-icons/gi";
import { AiFillPicture } from "react-icons/ai";
import { BsCalendar4Week } from "react-icons/bs";
import { GoDeviceCamera } from "react-icons/go";
import NucleoIcon from "../../components/UI/NucleoIcon";

function NucleoIcons() {

  function nucleoMouseEnter() {
    let nucleoAnimation = document.querySelector(
      ".nucleo-animation__container"
    );
    let span = document.querySelector(".span");
    nucleoAnimation.classList.add("blur-container");
    span.classList.add("span-blur");
  }

  function nucleoMouseLeave() {
    let nucleoAnimation = document.querySelector(
      ".nucleo-animation__container"
    );
    let span = document.querySelector(".span");
    nucleoAnimation.classList.remove("blur-container");
    span.classList.remove("span-blur");
  }

  return (
    <section className="nucleo-icons">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <Heading className={"mb-1 heading"} content={"Nucleo Icons"} />
            <p className="mb-2">
              The official package contains over 21.000 icons which are looking
              great in combination with Argon Design System. Make sure you check
              all of them and use those that you like the most.
            </p>
            <div className="btn-wrapper mt-5">
              <ButtonLink
                className={"btn btn-primary me-2"}
                location={
                  "https://demos.creative-tim.com/argon-design-system-angular/#/home"
                }
                text={"VIEW DEMO ICONS"}
              />
              <ButtonLink
                className={"btn btn-dark"}
                location={"https://nucleoapp.com/?ref=1712"}
                text={"VIEW ALL ICONS"}
              />
            </div>
          </div>
        </div>
        <div
          className="nucleo-animation"
          onMouseEnter={nucleoMouseEnter}
          onMouseLeave={nucleoMouseLeave}
        >
          <a
            href="https://demos.creative-tim.com/argon-design-system-angular/#/home"
            alt="Nucleo Icons"
          >
            <div className="nucleo-animation__container mt-5">
              <NucleoIcon
                icon={<RiVipDiamondFill />}
                iconClass={"icons diamond-icon shadow"}
              />
              <NucleoIcon icon={<FaPlay />} iconClass={"icons play-icon shadow"} />
              <NucleoIcon icon={<GiHandBag />} iconClass={"icons bag-icon shadow"} />
              <NucleoIcon
                icon={<RiBuildingFill />}
                iconClass={"icons building-icon shadow"}
              />
              <NucleoIcon icon={<FaReact />} iconClass={"icons react-icon shadow"} />
              <NucleoIcon
                icon={<AiFillPicture />}
                iconClass={"icons picture-icon shadow"}
              />
              <NucleoIcon icon={<GiCube />} iconClass={"icons cube-icon shadow"} />
              <NucleoIcon
                icon={<RiBarChart2Fill />}
                iconClass={"icons chart-icon shadow"}
              />
              <NucleoIcon
                icon={<BsCalendar4Week />}
                iconClass={"icons calendar-icon shadow"}
              />
              <NucleoIcon
                icon={<GoDeviceCamera />}
                iconClass={"icons camera-icon shadow"}
              />
              <NucleoIcon
                icon={<RiBankCardFill />}
                iconClass={"icons card-icon shadow"}
              />
              <NucleoIcon
                icon={<RiShoppingBag3Fill />}
                iconClass={"icons shopping-icon shadow"}
              />
              <NucleoIcon icon={<FaBell />} iconClass={"icons bell-icon shadow"} />
            </div>
            <span className="span">Eplore all the 21.000+ Nucleo Icons</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default NucleoIcons;
