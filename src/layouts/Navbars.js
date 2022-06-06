import React from "react";
import Heading from "../components/UI/Heading";
import Menu from "../components/Menu";
import { BsHeartFill, BsPinterest } from "react-icons/bs";
import { IoMdSettings, IoIosMegaphone, IoLogoGoogleplus } from "react-icons/io";
import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";

function Navbars() {
  return (
    <section className="navbars">
      <div className="container">
        <Heading className={"heading mb-5"} content={"Navbars"} />
      </div>
      <Menu
        className={"bg-color-default py-4 svg-lg"}
        contentFirst={<BsHeartFill />}
        contentSecond={<IoIosMegaphone />}
        contentThird={<IoMdSettings />}
        logoContent={"DEFAULT COLOR"}
      />
      <Menu
        className={"bg-color-primary py-4 mt-4 svg-lg"}
        contentFirst={"Discover"}
        contentSecond={"Profile"}
        contentThird={"Settings"}
        logoContent={"PRIMARY COLOR"}
      />
      <Menu
        className={"bg-color-success py-4 mt-4 svg-lg"}
        contentFirst={<BsHeartFill />}
        contentSecond={<IoIosMegaphone />}
        contentThird={<IoMdSettings />}
        logoContent={"SUCCESS COLOR"}
      />
      <Menu
        className={"bg-color-danger py-4 mt-4 svg-lg"}
        contentFirst={<AiFillFacebook />}
        contentSecond={<AiOutlineTwitter />}
        contentThird={<IoLogoGoogleplus />}
        logoContent={"DANGER COLOR"}
      />
      <Menu
        className={"bg-color-warning py-4 mt-4 svg-lg"}
        contentFirst={<AiFillFacebook />}
        contentSecond={<AiOutlineTwitter />}
        contentThird={<BsPinterest />}
        logoContent={"WARNING COLOR"}
      />
      <Menu
        className={"bg-color-info py-4 mt-4 svg-lg"}
        iconFirst={<AiFillFacebook />}
        contentFirst={"Facebook"}
        iconSecond={<AiOutlineTwitter />}
        contentSecond={"Twitter"}
        iconThird={<AiOutlineInstagram />}
        contentThird={"Instagram"}
        logoContent={"INFO COLOR"}
      />
    </section>
  );
}

export default Navbars;
