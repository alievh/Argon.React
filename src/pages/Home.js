import React from "react";
import BasicElements from "../layouts/Home/BasicElements";
import Intro from "../layouts/Home/Intro";
import Inputs from '../layouts/Home/Inputs';
import ChecksRadios from "../layouts/Home/ChecksRadios";
import Navbars from "../layouts/Navbars";
import HomeMain from "../layouts/Home/HomeMain";
import BootstrapCarousel from "../layouts/Home/BootstrapCarousel";
import NucleoIcons from "../layouts/Home/NucleoIcons";
import LoginRegister from "../layouts/Home/LoginRegister";
import DownloadAngular from "../layouts/DownloadAngular";
import Footer from "../layouts/Footer";
import TemplatePhoto from "../layouts/TemplatePhoto";

function Home() {
  return (
    <>
      <Intro />
      <BasicElements />
      <Inputs />
      <ChecksRadios />
      <Navbars />
      <HomeMain />
      <BootstrapCarousel />
      <NucleoIcons />
      <LoginRegister />
      <DownloadAngular />
      <Footer template={<TemplatePhoto />}/>
    </>
  );
}

export default Home;
