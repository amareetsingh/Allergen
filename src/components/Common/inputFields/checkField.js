import React,{forwardRef} from "react";

const CheckField =  forwardRef((props, ref) => {
  const {label, checked, onChange, defaultChecked}= props;
  return (
    <div>
      <input
        className="form-check-input"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        defaultChecked={defaultChecked}
        ref={ref}
      />
      {label && <label className="form-check-label" for="flexCheckDefault">
        {label}
      </label>}
    </div>
  );
});

export default CheckField;
