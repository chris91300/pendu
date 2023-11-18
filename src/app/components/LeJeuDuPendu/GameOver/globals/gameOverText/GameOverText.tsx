import React from 'react'
import { GameOverTextPropsType } from './gameOverText'



export default function GameOverText({ text, word }: GameOverTextPropsType) {
  return (
    <p className='text-center text-black'>
      { text } <span className="font-bold uppercase">{ word }</span>
    </p>
  )
}
