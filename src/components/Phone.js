import React from 'react';
import { useState } from 'react'

export default function Phone(props) {

  const [phone, setPhone] = useState(); 

  const label = props.label ;
  const placeholder = props.placeholder || "Enter Phone";
  const autoFocus = props.autoFocus ? true : false;
  const minLength = props.minLength ;
  const maxLength = props.maxLength ;
  const disabled = props.disabled ? true : false;
  const required = props.required ? true : false;
  const readOnly = props.readOnly ? true : false;
  const size = props.size || 20;

  const handlePhone = (e) =>{
      const formatedPH =formatPhoneNumber(e.target.value)
      setPhone(formatedPH)
  }

  function formatPhoneNumber(value) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');  
    const phoneNumberLength = phoneNumber.length;  
    if (phoneNumberLength < 4) return phoneNumber;    
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }  
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  }
  const options = [
    { key: 'India', value: '(+91)' },
    { key: 'International', value: '' }
  ];
  const [value, setValue] = React.useState('(+91)');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
  return (
      <div>
        <label> {label} &nbsp; </label>
        <select value={value} onChange={handleChange}>
          {options.map((option) => (
            <option value={option.value} key={option.key}>{option.key}</option>
          ))}
        </select>
        <input 
        type="tel" 
        value={value}
        placeholder={placeholder}
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        autoFocus={autoFocus}
        minLength={minLength}
        maxLength={maxLength}
        disabled={disabled}
        required={required}
        onChange={handlePhone}
        readOnly={readOnly}
        size={size}
        /> 
      </div>
  )
}