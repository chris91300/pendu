import React from 'react'

function WordToFindContainer({ children }) {
  return (
    <div className="block block_col block_grow">
        <h2>mot à trouver</h2>
        { children }
    </div>
  )
}

export default WordToFindContainer