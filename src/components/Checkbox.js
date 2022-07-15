import React from 'react'

export default function Checkbox(props) {

  const label = props.label ;
  const name = props.name ? props.name : ""; 
  const value = props.value ? props.value : ""; 
  const className = props.className ? props.className : 'form-check-input';
  const isChecked = props.checked ? true : false;
  const disabled = props.disabled ? true : false;
  const required = props.required ? true : false;
  const isVertical = props.isVertical ? true : false;
  const onChange = props.onChange ;

  return (
      <div className={`form-check${
        isVertical ? '' : ` form-check-inline`
      }`}>
        <input 
        type="checkbox"
        id={label}
        value={value}
        name={name}
        checked={isChecked}
        disabled={disabled}
        required={required}
        onChange={onChange}
        className={className}
        /> 
        <label className="form-check-label" htmlFor={label}>
              {label}</label>
      </div>
  )
}