import React from 'react';

export default function Date(props) {

  const label =  props.label;
  const value = props.value;
  const defaultValue = props.defaultValue;
  const min = props.min;
  const max = props.max;
  const required = props.required ? true : false;
  const disabled = props.disabled ? true : false;
  const readOnly = props.readOnly ? true : false;
  const autoFocus = props.autoFocus ? true : false;
  const onChange = props.onChange;  

  return (
    <div>
        <label> {label} &nbsp; </label>
        <input 
        type="date" 
        value={value}
        defaultValue={defaultValue}
        min={min}
        max={max}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        autoFocus={autoFocus}
        onChange={onChange}
        />
    </div>
  )
}