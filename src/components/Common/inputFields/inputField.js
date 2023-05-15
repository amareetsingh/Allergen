import React,{forwardRef} from "react";

const InputField = forwardRef((props, ref) => {
  const {label, type, defaultValue, onChange, disabled} = props;
  return (
    <div>
      {label && <label className="form-label">{label}</label>}
      <input
        type={type}
        className="form-control"
        defaultValue={defaultValue}
        onChange={onChange}
        ref={ref}
        disabled={disabled}
      />
    </div>
  );
});

export default InputField;
