import React from "react";

import "./SmallField.css";
export default function SmallField({
  labelName,
  fieldType,
  fieldName,
  handleChange,
}) {
  return (
    <div id="smallField">
      <label id="smallLabel">{labelName}</label>
      <input
        id="smallInput"
        type={fieldType}
        name={fieldName}
        onChange={handleChange}
      />
    </div>
  );
}
