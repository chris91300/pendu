import React from 'react'
import { map } from 'ramda';
import letterBuilder from './letterBuilder'
import { a_m, n_z } from '@/app/utils/alphabet';
import Container from '../../container/Container';


type KeyboardProps = {
  word: string,
  clickOnLetter: (letter: string) => void
}

function Keyboard({ word, clickOnLetter }: KeyboardProps) {
  
    const getLetterComponent = letterBuilder(word, clickOnLetter)
    const KeysAtoM = map( getLetterComponent, a_m )
    const KeysNtoZ = map( getLetterComponent, n_z )

    
  return (
    <>
      <Container className="flex flex-col order-first md:order-none md:flex-row md:flex-wrap md:w-[650px] lg:w-[850px]">{ KeysAtoM} </Container>
      <Container className="flex flex-col md:flex-row md:flex-wrap md:w-[650px] lg:w-[850px]">{ KeysNtoZ} </Container>
    </>
  )
}

export default Keyboard