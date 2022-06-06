import React from "react";
import Support from "./Support";
import TemplatePhoto from "./TemplatePhoto";
import { useLocation } from 'react-router-dom'

function Footer() {
  const location = useLocation();
  if (location.pathname === '/' || location.pathname === '/landing'){
    return <footer className="footer "><TemplatePhoto /><Support /></footer>;
  }else {
    return <footer className="footer "><Support /></footer>;
  }
}

export default Footer;
