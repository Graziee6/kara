import React from 'react'

import './FormField.css'

export default function FormField({labelName, fieldType, fieldName, handleChange}) {
  
  return (
    <div className='formField'>
        <label id="inputLabel">{labelName}</label>
        <input type={fieldType} id="inputField" name={fieldName} onChange={handleChange}/>
    </div>
  )
}
