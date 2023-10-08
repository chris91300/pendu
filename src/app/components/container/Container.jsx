import React, { forwardRef } from 'react'

function Container({ id=null, className, ref=null, children }) {
  
  return (
    <div id={ id } className={ className } ref={ref}>
      { children }
    </div>
  )
}

const ForwardContainer = forwardRef( function Container(props, ref) {

  const { id=null, className, children } = props

  return (
    <div id={ id } className={ className } ref={ref}>
      { children }
    </div>
  )
} )

export { ForwardContainer } 

export default Container