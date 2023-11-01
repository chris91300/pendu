import React from 'react'
import { map } from 'ramda';
import letterBuilder from './letterBuilder'
import { a_m, n_z } from '@/app/utils/alphabet';
import KeyboardAToM from './KeyboardAToM';
import KeyboardNToZ from './KeyboardNToZ';


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
    <KeyboardAToM>
      { KeysAtoM }
    </KeyboardAToM>

    <KeyboardNToZ>
      { KeysNtoZ }
    </KeyboardNToZ>
    </>
  )
}

export default Keyboard