import React from 'react'
import Button from '../Button'


function ButtonCloseWindow({ onClick }) {
 
  return <Button
          extendClassName="flex justify-center items-center w-6 h-6 rounded-full absolute top-1 right-1"
          onClick={ onClick }
          >X</Button>
}

export default ButtonCloseWindow