import React from "react";

function NucleoIcon({ icon, iconClass }) {
  return (
    <div className={`position-absolute ${iconClass}`}>
      {icon}
    </div>
  );
}

export default NucleoIcon;
