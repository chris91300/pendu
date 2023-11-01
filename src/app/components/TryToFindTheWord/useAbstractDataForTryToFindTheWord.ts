import { useState } from "react";
import { includes, __, equals, update } from 'ramda'
import getUpperCaseArrayFrom from '../../utils/getUpperCaseArrayFrom'
import replaceLettersByUnderscore from "../../utils/replaceLettersByUnderscore";
import isItTheLastTry from '../../utils/isItTheLastTry'

type ModalStatus = "success" | "error"
type GameStatus = "victory" | "fail"

type ReturnTypes = [
  number,
  string,
  string,
  (lettre: string) => void,
  ModalStatus,
  boolean,
  string,
  number,
  ()=>void
]

function useAbstractDataForTryToFindTheWord(wordToFind: string, isOver: (text: GameStatus)=>void): ReturnTypes {
    const wordToFindWithUnderscore = replaceLettersByUnderscore(wordToFind)
    const word = getUpperCaseArrayFrom(wordToFind);
    const [tries, setTries] = useState(10);
    const [wordHidden, setWordHidden] = useState(wordToFindWithUnderscore);
    const [ wordHiddenSplit, setWordHiddenSplit ] = useState(wordHidden.split(""))
    const [letter, setLetter] = useState("");
    const [totalLetter, setTotalLetter] = useState(0);
    const [modalStatus, setModalStatus] = useState<ModalStatus>("success");
    const [modalIsVisible, setModalIsVisible] = useState(false);
  
    const playerWon = () => isOver("victory");
    const playerFailed = () => isOver("fail");
    const isInWord = includes(__, word);
   
  
    const clickLetter = (lettre: string) => {      
       isInWord(lettre)? letterExist(lettre) : letterNotExist(lettre);
    }
  
    function letterExist(lettre: string){
      let wordHidden = wordHiddenSplit;
      let totalLetterFound = 0;
      
      word.forEach( (char: string, index: number) =>{
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
  
    function letterNotExist(lettre: string){
      isItTheLastTry(tries) ? playerFailed() : error(lettre);    
    }
  
    function success(wordHiddenSplit: string[], lettre: string, totalLetterFound:number){
      const wordHidden = wordHiddenSplit.join("");
      setWordHiddenSplit(wordHiddenSplit)
      setWordHidden(wordHidden);
      setModalStatus("success");
      setModalIsVisible(true);
      setLetter(lettre);
      setTotalLetter(totalLetterFound);
      
    }
  
    function error (lettre: string){
      setTries(tries-1);
      setModalStatus("error");
      setModalIsVisible(true);
      setLetter(lettre);
    }
  
    function hiddeModal(){
      setModalIsVisible(false);    
    }

    return [
        tries,
        wordHidden,
        word,
        clickLetter,
        modalStatus,
        modalIsVisible,
        letter,
        totalLetter,
        hiddeModal
      ]
}

export default useAbstractDataForTryToFindTheWord