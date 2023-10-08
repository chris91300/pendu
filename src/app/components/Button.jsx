import React from 'react'

function Button({ extendClassName="", onClick, disabled=false, children }) {
   
    const className = `p-2 my-2 mx-auto rounded-xl font-bold border border-[wheat] text-[wheat] ${extendClassName}`;
    
  return (
    <button className={ className } onClick={onClick} disabled={disabled}>{ children }</button>
  )
}

export default Button