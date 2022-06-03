import React from "react";

function CheckRadio({
  inputClassName,
  type,
  forName,
  labelClassName,
  content,
}) {
  return (
    <div className="form-check">
      <input className={inputClassName} type={type} name={forName} />
      <label className={labelClassName} htmlFor={forName}>
        {content}
      </label>
    </div>
  );
}

export default CheckRadio;
