
"use client"

import React, {useState, useRef } from "react";
import Try from './Try';
import Result from './result';
import Letter from './Letter';
import {Modal} from './modal'; 
import LETTERS from '../letters';
import { includes, __, equals, update } from 'ramda'
import getUpperCaseArrayFrom from '../utils/getUpperCaseArrayFrom'
import replaceLettersByUnderscore from "../utils/replaceLettersByUnderscore";
import isItTheLastTry from '../utils/isItTheLastTry'



const TryToFindTheWord = ({ wordToFind, isOver }) => {

  const wordToFindWithUnderscore = replaceLettersByUnderscore(wordToFind)
  const word = getUpperCaseArrayFrom(wordToFind);
  const [tries, setTries] = useState(10);
  const [wordHidden, setWordHidden] = useState(wordToFindWithUnderscore);
  const [ wordHiddenSplit, setWordHiddenSplit ] = useState(wordHidden.split(""))
  const [letter, setLetter] = useState("");
  const [totalLetter, setTotalLetter] = useState(0);
  const [modalStatus, setModalStatus] = useState("success");
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const playerWon = () => isOver("victory");
  const playerFailed = () => isOver("fail");
  const isInWord = includes(__, word);
 

  const clickLetter = (lettre) => {      
     isInWord(lettre)? letterExist(lettre) : letterNotExist(lettre);
  }



  function letterExist(lettre){
    let wordHidden = wordHiddenSplit;
    let totalLetterFound = 0;
    
    word.forEach( (char, index) =>{
        if( equals(char, lettre) ) {
            wordHidden = update(index, lettre, wordHidden)
            totalLetterFound++;
        }
    })
    
    includes("_", wordHidden)
    ? 
    success(wordHidden, lettre, totalLetterFound)
    :
    playerWon();
   
  }

  function letterNotExist(lettre){
    isItTheLastTry(tries) ? playerFailed() : error(lettre);    
  }



  function success(wordHiddenSplit, lettre, totalLetterFound){
    const wordHidden = wordHiddenSplit.join("");
    setWordHiddenSplit(wordHiddenSplit)
    setWordHidden(wordHidden);
    setModalStatus("success");
    setModalIsVisible("visible");
    setLetter(lettre);
    setTotalLetter(totalLetterFound);
    
  }

  function error (lettre){
    setTries(tries-1);
    setModalStatus("error");
    setModalIsVisible(true);
    setLetter(lettre);
  }


  function hiddeModal(){
    setModalIsVisible(false);    
  }



  return (
    <div className="large block_col_to_row">
      <div className="block block_col block_grow">
        <Try tries={tries}/>
        
        <Result hiddenWord={wordHidden}/>
      </div>

      <div id="letterList" className="block block_row block_row--wrap">
        
        {LETTERS.map(char => {
          return <Letter 
            key={char} 
            lettre={char} 
            word={word} 
            onClickLetter={clickLetter}
            />
        
        })}
      </div>
      <Modal 
            status={modalStatus} 
            modalIsVisible={modalIsVisible} 
            letter={letter} 
            totalLetter={totalLetter}
            word={word}
            tries={tries}
            hiddeModal={hiddeModal} />
    </div>
  )
    
}

export default  TryToFindTheWord

