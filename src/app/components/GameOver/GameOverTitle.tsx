//import { toUpper } from 'ramda'
import React, { ReactNode } from 'react'


type GameOverTitlePropsType = {
  children: ReactNode
}

function GameOverTitle({ children }: GameOverTitlePropsType) {

  return (
    <h2 className='text-black text-4xl uppercase'>{ children }</h2>
  )
}

export default GameOverTitle