import React from 'react'
import { toUpper } from 'ramda'

function GameOverText({ text, word }) {
  return (
    <p>{ text } <span className="bold">{ toUpper(word) }</span></p>
  )
}

export default GameOverText