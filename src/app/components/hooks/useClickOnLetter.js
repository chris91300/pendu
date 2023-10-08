"use client"
import React, { useState } from 'react';
import { includes, __ , not } from 'ramda'


const useClickOnLetter = (lettre, word, onClickLetter)=>{
  const [css, setCSS] = useState("[wheat]");
  const [ letterAlreadyUsed, setLetterAlreadyUsed ] = useState(false);
  const disabled = letterAlreadyUsed ? 'disabled': null;
  const isItInWordToFind = includes(__, word);


  const onClick = () => {
    if ( not(letterAlreadyUsed) ){  

      const color = isItInWordToFind( lettre )? 'green' : 'red';
      setCSS(color)
      setLetterAlreadyUsed(true)
      onClickLetter(lettre);

    }
    
  }
  
  return [css, onClick, disabled]
}

export default useClickOnLetter;