"use client"
import React, { useState } from 'react';
import { includes, __ , not } from 'ramda'

type cssLetterColor = "[wheat]" | "red" | "green"

type useClickOnLetterReturn = [
  cssLetterColor,
  ()=>void,
  boolean
]

type useClickOnLetterType = (letter: string, word: string[], onClickLetter: (letter: string) => void) => useClickOnLetterReturn



const useClickOnLetter: useClickOnLetterType = (letter, word, onClickLetter) => {

  const [css, setCSS] = useState<cssLetterColor>("[wheat]");
  const [ letterAlreadyUsed, setLetterAlreadyUsed ] = useState(false);
  const disabled = letterAlreadyUsed;
  const isItInWordToFind = includes(__, word);


  const onClick = () => {
    if ( not(letterAlreadyUsed) ){  

      const color = isItInWordToFind( letter ) ? 'green' : 'red';
      setCSS(color)
      setLetterAlreadyUsed(true)
      onClickLetter(letter);

    }
    
  }
  
  return [css, onClick, disabled]
}

export default useClickOnLetter;