import React from "react";
import BasicElements from "../layouts/BasicElements";
import Intro from "../layouts/Intro";
import Inputs from '../layouts/Inputs';
import ChecksRadios from "../layouts/ChecksRadios";
import Navbars from "../layouts/Navbars";
import HomeMain from "../layouts/HomeMain";
import BootstrapCarousel from "../layouts/BootstrapCarousel";
import NucleoIcons from "../layouts/NucleoIcons";
import LoginRegister from "../layouts/LoginRegister";
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
