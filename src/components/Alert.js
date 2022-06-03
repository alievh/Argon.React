import React from "react";

function Alert({ className, icon, content }) {
  function removeAlert() {
    let removeDiv = document.querySelector(".alert-container");
    removeDiv.className = "d-none";
  }

  return (
    <div className={className}>
      <div className="alert-container__left">
        {icon}
        {content}
      </div>
      <button type="button" className="close-alert">
        <span onClick={removeAlert}>x</span>
      </button>
    </div>
  );
}

export default Alert;
