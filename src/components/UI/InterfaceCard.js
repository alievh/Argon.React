import React from "react";

function InterfaceCard({
  interfaceIcon,
  interfaceHeading,
  interfaceContent,
  interfaceLink,
  headingClass,
}) {
  return (
    <div className="interface-card shadow mt-5 rounded">
      <div className="px-3 d-flex">
        <div>{interfaceIcon}</div>
        <div className="ps-4">
          <h5 className={headingClass}>{interfaceHeading}</h5>
          <p>{interfaceContent}</p>
          {interfaceLink}
        </div>
      </div>
    </div>
  );
}

export default InterfaceCard;
