import React from 'react'

function GameContainer({ children }) {
  return (
    <div className="block block_row" id="app_container">
        { children }
    </div>
  )
}

export default GameContainer