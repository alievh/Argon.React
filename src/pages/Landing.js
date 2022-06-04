import React from "react";
import DownloadAngular from "../layouts/DownloadAngular";
import Footer from "../layouts/Footer";
import TemplatePhoto from "../layouts/TemplatePhoto";

function Landing() {
  return (
    <>
      <DownloadAngular />
      <Footer template={<TemplatePhoto />} />
    </>
  );
}

export default Landing;
