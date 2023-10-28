import React from 'react'


type GameOverTextPropsType = {
  text: string,
  word: string
}

function GameOverText({ text, word }: GameOverTextPropsType) {
  return (
    <p className='text-black'>
      { text } <span className="font-bold uppercase">{ word }</span>
    </p>
  )
}

export default GameOverText