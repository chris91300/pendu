import { toUpper } from 'ramda'
import React from 'react'

function GameOverTitle({ children }) {

  return (
    <h2>{ toUpper(children) }</h2>
  )
}

export default GameOverTitle