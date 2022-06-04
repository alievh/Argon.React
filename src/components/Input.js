import React from "react";

function Input({disabled, divClassName, inputClassName, type, placeHolder}) {
  return (
    <div className={divClassName}>
      <input disabled={disabled} className={inputClassName} type={type} placeholder={placeHolder} />
    </div>
  );
}

export default Input;
