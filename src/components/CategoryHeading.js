import React from "react";

function CategoryHeading({ divClassName, textClassName, content }) {
  return (
    <div className={divClassName}>
      <small className={textClassName}>{content}</small>
    </div>
  );
}

export default CategoryHeading;
