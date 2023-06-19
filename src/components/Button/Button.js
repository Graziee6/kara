import React from 'react'
import './Button.css'
export default function Button({buttonValue, onSubmitFn}) {
  return (
    <div className='buttonDiv'>
        <input type="submit" value={buttonValue} id="btn" onSubmit={onSubmitFn}/>
    </div>
  )
}
