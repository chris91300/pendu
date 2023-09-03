
import React from 'react'

function LetterButton({ color, onClick, disabled, children }) {
  const className = `lettre lettre--${color}`;
  return (
    <button className={className} onClick={onClick} disabled={disabled} >
      {children}
    </button>
  )
}

export default LetterButton