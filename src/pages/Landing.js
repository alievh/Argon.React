import React from "react";
import DownloadAngular from "../layouts/DownloadAngular";
import AmazingTeam from "../layouts/Landing/AmazingTeam";
import AwesomeFeatures from "../layouts/Landing/AwesomeFeatures";
import LandingAngular from "../layouts/Landing/LandingAngular";
import LandingCards from "../layouts/Landing/LandingCards";
import LandingCostumer from "../layouts/Landing/LandingCostumer";
import LandingIntro from "../layouts/Landing/LandingIntro";
import ModernInterface from '../layouts/Landing/ModernInterface';

function Landing() {
  return (
    <>
      <LandingIntro />
      <LandingCards />
      <AwesomeFeatures />
      <LandingCostumer />
      <ModernInterface />
      <AmazingTeam />
      <LandingAngular />
      <DownloadAngular />
    </>
  );
}

export default Landing;
