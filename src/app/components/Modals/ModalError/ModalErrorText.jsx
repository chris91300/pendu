import React from 'react'

function ModalErrorText({ letter }) {
  return (
    <p className='text-black'>
        Désolé il n'y a pas de <span className="font-bold">{letter}</span> dans le mot.
    </p>
  )
}

export default ModalErrorText