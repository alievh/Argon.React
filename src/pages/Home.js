import React from "react";
import BasicElements from "../layouts/BasicElements";
import Intro from "../layouts/Intro";
import Inputs from '../layouts/Inputs';
import ChecksRadios from "../layouts/ChecksRadios";
import Navbars from "../layouts/Navbars";
import HomeMain from "../layouts/HomeMain";
import BootstrapCarousel from "../layouts/BootstrapCarousel";
import NucleoIcons from "../layouts/NucleoIcons";

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
    </>
  );
}

export default Home;
