"use client"
import React, { useState } from 'react';
import { includes, __ , not } from 'ramda'
import { cssLetterColor, useClickOnLetterReturn } from './useOnClickLetter';




function useClickOnLetter(letter: string, word: string[], onClickLetter: (letter: string) => void): useClickOnLetterReturn{

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
  
  return { css, onClick, disabled }
}

export default useClickOnLetter;