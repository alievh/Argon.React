import React from "react";
import Support from "./Support";
import TemplatePhoto from "./TemplatePhoto";

function Footer({ template }) {
  return <footer className="footer ">{template}<Support /></footer>;
}

export default Footer;
