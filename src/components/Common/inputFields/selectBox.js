import React,{forwardRef} from "react";

const SelectBox =forwardRef((props, ref) => {
  const { label, options, value, onChange}= props;
  return (
    <div>
      {label && <label>{label}</label>}
      <select
        class="form-select"
        aria-label="Default select example"
        value={value}
        onChange={onChange}
        ref={ref}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
});

export default SelectBox;
