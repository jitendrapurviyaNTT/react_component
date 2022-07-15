import React from 'react'

export default function Textarea(props) {

  const label = props.label ;
  const value = props.value ? props.value : ""; 
  const rows = props.rows ? props.rows : ""; 
  const cols = props.cols ? props.cols : ""; 
  const placeholder = props.placeholder ? props.placeholder : ""; 
  const name = props.name ? props.name : ""; 
  const className = props.className ? props.className : 'form-control';
  const readOnly = props.readOnly ? true : false;
  const disabled = props.disabled ? true : false;
  const required = props.required ? true : false;
  const maxlength = props.maxlength ? props.maxlength : "";
  const onChange = props.onChange ;

  return (
    <div>
    <label for={label}>{label}</label>
    <textarea className={className} id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        readOnly={readOnly}
        disabled={disabled}
        required={required}
        onChange={onChange}
        rows={rows} 
        cols={cols}
        maxlength={maxlength}/>
      </div>
  )
}