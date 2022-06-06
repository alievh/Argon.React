import React from "react";

function ToolTip({content, placement, toolTipContent}) {
  return (
    <button
      type="button"
      className="btn btn-primary"
      data-bs-toggle="tooltip"
      data-bs-placement={placement}
      title={toolTipContent}
    >
      {content}
    </button>
  );
}

export default ToolTip;
