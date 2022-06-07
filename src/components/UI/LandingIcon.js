import React from "react";

function LandinIcon({icon, iconBackground}) {
  return (
    <div
      className={`landing-icon d-flex justify-content-center align-items-center ${iconBackground}`}
    >
      {icon}
    </div>
  );
}

export default LandinIcon;
