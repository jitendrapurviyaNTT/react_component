import React from 'react';
import { useState } from 'react';

export default function Alphanumeric(props) {

  const [alphaNum, setAlphanum] = useState(""); 

  const label = props.label ;
  const placeholder = props.placeholder;
  const autoFocus = props.autoFocus ? true : false;
  const minLength = props.minLength || 0;
  const maxLength = props.maxLength || 524288;
  const disabled = props.disabled ? true : false;
  const required = props.required ? true : false;
  const readOnly = props.readOnly ? true : false;
  const size = props.size || 20;

  const onInputChange = (e) => {
    const { value } = e.target; 
    const re = /^[A-Za-z0-9]+$/;
    if (value === "" || re.test(value)) {
      setAlphanum(value);
      if(props.onChange){
      props.onChange(value)
      }
    }
  }
  return (
      <div>
        <label> {label} &nbsp; </label>
        <input 
        type="text" 
        value={alphaNum}
        placeholder={placeholder}
        autoFocus={autoFocus}
        minLength={minLength}
        maxLength={maxLength}
        disabled={disabled}
        required={required}
        onChange={onInputChange}
        readOnly={readOnly}
        size={size}
        /> 
      </div>
  )
}