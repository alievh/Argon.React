import React, { useState } from "react";

function NavigationPills({ icon, className }) {
  let [active, setActive] = useState(false);

  function backgroundChanger(e) {
    e.preventDefault();
    let navPill = document.querySelectorAll(".navigation-pills__pill");
    navPill.forEach((pill) => {
      pill.classList.remove("active");
    });
    setActive(true);
    console.log("hello");
  }

  return (
    <a
      onClick={backgroundChanger}
      href="true"
      className={active ? `${className} active` : className}
    >
      {icon}
    </a>
  );
}

export default NavigationPills;
