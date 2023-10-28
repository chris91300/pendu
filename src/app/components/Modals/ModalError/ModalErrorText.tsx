import React from 'react'


type ModalErrorTextProps = {
  letter: string
}


function ModalErrorText({ letter }: ModalErrorTextProps) {
  return (
    <p className='text-black'>
        Désolé il n'y a pas de <span className="font-bold">{letter}</span> dans le mot.
    </p>
  )
}

export default ModalErrorText