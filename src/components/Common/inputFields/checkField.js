import React from "react";

const CheckField = ({ label, checked, onChange, defaultChecked }) => {
  return (
    <div>
      <input
        className="form-check-input"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        defaultChecked={defaultChecked}
      />
      {label && <label className="form-check-label" for="flexCheckDefault">
        {label}
      </label>}
    </div>
  );
};

export default CheckField;
