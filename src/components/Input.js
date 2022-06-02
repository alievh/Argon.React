import React from "react";

function Input({divClassName, inputClassName, type, placeHolder}) {
  return (
    <div className={divClassName}>
      <input className={inputClassName} type={type} placeholder={placeHolder} />
    </div>
  );
}

export default Input;
