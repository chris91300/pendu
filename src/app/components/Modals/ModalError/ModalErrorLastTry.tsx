import React from 'react'


type ModalErrorLastTryProps = {
  tries: number
}


function ModalErrorLastTry({ tries }: ModalErrorLastTryProps) {
    const lastTry = tries === 1;

  return lastTry && <p className='text-black'>Attention à la prochaine erreur, couik!!!</p>
  
}

export default ModalErrorLastTry