"use client"
import React, { useState } from 'react';
import { includes, __ , not } from 'ramda'


const useClickOnLetter = (lettre, word, onClickLetter)=>{
  const [css, setCSS] = useState("black");
  const [ used, setUsed ] = useState(false);
  const disabled = used ? 'disabled': null;
  const isItInWordToFind = includes(__, word);


  const onClick = () => {
    if ( not(used) ){  

      const color = isItInWordToFind( lettre )? 'green' : 'red';
      setCSS(color)
      setUsed(true)
      onClickLetter(lettre);

    }
    
  }
  
  return [css, onClick, disabled]
}

export default useClickOnLetter;