
import { equals } from 'ramda'
import React from 'react'
import { ModalErrorLastTryProps } from './modalErrorLastTry';


export default function ModalErrorLastTry({ tries }: ModalErrorLastTryProps) {
  const equalTo1 = equals(1)
  const lastTry = equalTo1(tries);

  return lastTry && <p className='text-black'>Attention à la prochaine erreur, couik!!!</p>
  
}
