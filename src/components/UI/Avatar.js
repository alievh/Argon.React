import React from "react";

function Avatar({src, title, alt, imgClass, width}) {
  return (
    <>
    {title}
    <img className={imgClass} src={src} alt={alt} width={width} />
    </>
  );
}

export default Avatar;
