import React from 'react'

function ModalErrorLastTry({ tries }) {
    const lastTry = tries === 1;

  return lastTry && <p className='text-black'>Attention à la prochaine erreur, couik!!!</p>
  
}

export default ModalErrorLastTry