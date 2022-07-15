import React from 'react'

export default function Numeric(props) {

  const label = props.label ;
  const value = props.value;  
  const defaultValue = props.defaultValue;
  const placeholder = props.placeholder;
  const autoFocus = props.autoFocus ? true : false;
  const min = props.min || 0;
  const max = props.max || 524288;
  const disabled = props.disabled ? true : false;
  const required = props.required ? true : false;
  const readOnly = props.readOnly ? true : false;
  const onChange = props.onChange ;


  return (
      <div>
        <label> {label} &nbsp; </label>
        <input 
        type="number" 
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        autoFocus={autoFocus}
        readOnly={readOnly}
        min={min}
        max={max}
        disabled={disabled}
        required={required}
        onChange={onChange}
        /> 
      </div>
  )
}