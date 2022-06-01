import React from "react";

function ButtonLink({ className, location, icon, text }) {
  return (
    <a className={className} href={location}>
      {icon}
      {text}
    </a>
  );
}

export default ButtonLink;
