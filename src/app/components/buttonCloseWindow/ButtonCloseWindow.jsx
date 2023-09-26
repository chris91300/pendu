import React from 'react'

function ButtonCloseWindow({ onClick }) {
  return (
    <button className="button_hide_modal" onClick={ onClick }>X</button>
  )
}

export default ButtonCloseWindow