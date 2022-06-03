import React from "react";

function HeadingComponent({className, headingTitle, headingContent}) {
  return (
    <div className={`row py-3 aling-items-center ${className}`}>
      <div className="col-sm-3 d-flex align-items-center">
        <small>{headingTitle}</small>
      </div>
      <div className="col-sm-9 d-flex align-items-center">{headingContent}</div>
    </div>
  );
}

export default HeadingComponent;
