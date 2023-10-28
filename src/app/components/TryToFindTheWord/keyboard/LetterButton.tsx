
import React, { ReactNode } from 'react'
import Button from '../../Button';
import getColorText from './getColorText'
import getColorBorder from './getColorBorder'

type LetterButtonProps = {
  color: "red" | "green" | "[wheat]",
  onClick: ()=>void,
  disabled: boolean,
  children: ReactNode
}

function LetterButton({ color, onClick, disabled, children }: LetterButtonProps) {

  const textColor = getColorText(color)
  const borderColor = getColorBorder(color)
 
  const className = `flex justify-center items-center shrink text-sm w-7 h-7 font-bold mx-2 ${textColor} ${borderColor} md:w-9 md:h-9 md:text-md lg:w-12 lg:h-12 lg:text-xl `;

  return (
    <Button extendClassName={ className } onClick={onClick} disabled={disabled} >
      {children}
    </Button>
  )
}

export default LetterButton