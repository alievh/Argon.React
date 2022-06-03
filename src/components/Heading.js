import React from "react";

function Heading({className, content}) {
  return (
    <h2 className={className}>
      <span>{content}</span>
    </h2>
  );
}

export default Heading;
