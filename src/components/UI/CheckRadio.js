import React, { useState } from "react";

function CheckRadio({
  inputClassName,
  divClassName,
  type,
  forName,
  labelClassName,
  content,
  check,
  disabled,
  forFor,
  role,
}) {
  let [checked, setChecked] = useState(check);

  function isChecked() {
    if (checked === true) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  }

  return (
    <div className={divClassName}>
      <input
        disabled={disabled}
        onChange={isChecked}
        className={inputClassName}
        checked={checked}
        type={type}
        name={forName}
        role={role}
      />
      <label className={labelClassName} htmlFor={forFor}>
        {content}
      </label>
    </div>
  );
}

export default CheckRadio;
