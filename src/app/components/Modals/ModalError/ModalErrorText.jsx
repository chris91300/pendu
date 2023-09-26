import React from 'react'

function ModalErrorText({ letter }) {
  return (
    <p className="modal_text">
        Désolé il n'y a pas de <span className="bold">{letter}</span> dans le mot.
    </p>
  )
}

export default ModalErrorText