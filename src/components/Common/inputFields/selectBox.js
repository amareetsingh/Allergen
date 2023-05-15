import React from "react";

const SelectBox = ({ label, options, value, onChange }) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <select
        class="form-select"
        aria-label="Default select example"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
