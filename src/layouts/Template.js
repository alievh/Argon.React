import React from "react";

function Template({ location, imgClassName, src, alt }) {
  return (
    <a href={location}>
      <img className={imgClassName} src={src} alt={alt} />
    </a>
  );
}

export default Template;
