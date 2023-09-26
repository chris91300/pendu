import React from 'react'

function Container({ id=null, className, children }) {

  return (
    <div id={ id } className={ className }>
      { children }
    </div>
  )
}

export default Container