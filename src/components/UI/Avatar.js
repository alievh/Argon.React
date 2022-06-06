import React from "react";

function Avatar({src, title, alt, imgClass}) {
  return (
    <>
    {title}
    <img className={imgClass} src={src} alt={alt} width="150px" />
    </>
  );
}

export default Avatar;
