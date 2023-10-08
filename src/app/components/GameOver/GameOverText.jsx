import React from 'react'
//import { toUpper } from 'ramda'

function GameOverText({ text, word }) {
  return (
    <p className='text-black'>
      { text } <span className="font-bold uppercase">{ word }</span>
    </p>
  )
}

export default GameOverText