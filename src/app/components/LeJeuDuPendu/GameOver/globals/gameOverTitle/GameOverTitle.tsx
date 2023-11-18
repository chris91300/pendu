
import React from 'react'
import { GameOverTitlePropsType } from './gameOverTitle'


export default function GameOverTitle({ children }: GameOverTitlePropsType) {

  return (
    <h2 className='text-center text-black text-4xl uppercase'>
      { children }
    </h2>
  )
}
