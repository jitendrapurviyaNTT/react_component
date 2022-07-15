import React from 'react'

export default function Password(props) {

  const label = props.label ;
  const value = props.value;
  const placeholder = props.placeholder;
  const autoFocus = props.autoFocus ? true : false;
  const minLength = props.minLength || 0;
  const maxLength = props.maxLength || 524288;
  const disabled = props.disabled ? true : false;
  const required = props.required ? true : false;
  const size = props.size || 20;
  const pattern = props.pattern;
  const onChange = props.onChange ;


  return (
      <div>
        <label> {label} </label><br/>
        <input 
        type="password" 
        value={value}
        placeholder={placeholder}
        autoFocus={autoFocus}
        minLength={minLength}
        maxLength={maxLength}
        disabled={disabled}
        required={required}
        onChange={onChange}
        size={size}
        pattern={pattern}
        /> 
      </div>
  )
}