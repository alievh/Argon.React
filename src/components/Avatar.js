import React from "react";

function Avatar({src, title, alt, imgClass}) {
  return (
    <div className="col-sm-3 col-6">
      <small>{title}</small>
      <img className={imgClass} src={src} alt={alt} width="150px" />
    </div>
  );
}

export default Avatar;
