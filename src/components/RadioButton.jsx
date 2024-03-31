import React from "react";

const RadioButton = ({ meta, handleRadioButtonChange }) => {
  return (
    <div className="radio-button">
      <input
        type="radio"
        className="hidden"
        id={meta.id}
        name={meta.name}
        value={meta.value}
        onChange={handleRadioButtonChange}
        required
      />
      <label htmlFor={meta.id}>{meta.text}</label>
    </div>
  );
};

export default RadioButton;
