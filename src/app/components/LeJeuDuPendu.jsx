import React, { useState } from 'react'

import {WordToFind} from './wordToFind';
import {Modal} from './modal';
import TryToFindTheWord from "./TryToFindTheWord";
import { toUpper, not } from "ramda";
import GameOver from './GameOver'
import replaceLettersByUnderscore from "../utils/replaceLettersByUnderscore";


function LeJeuDuPendu() {

    const [gameIsStarted, setGameIsStarted] = useState(false);
    const [gameIsFinished, setGameIsFinished] = useState(false);
    const [word, setWord] = useState("");
    const [modalStatus, setModalStatus] = useState("success");
    //const [modalIsVisible, setModalIsVisible] = useState(false);

    const wordIsValid = word !== "";
  
    const validWord = (word) => { 
        setWord( toUpper(word) );
        setGameIsStarted(true)
    }



    const resetGame = ()=>{
        setWord("")
        setGameIsFinished(false)
        setGameIsStarted(false)
    }


    const isOver = (status)=>{
        setModalStatus(status);
        setGameIsFinished(true);
    }
  

   

    return (
        <>
        <div className="block block_row" id="app_container">
            { ( not( gameIsStarted )  &&  not( wordIsValid ) )  &&  <WordToFind onValid={validWord}/> }
            { ( gameIsStarted  &&  wordIsValid && not( gameIsFinished ))  &&  <TryToFindTheWord wordToFind={word} isOver={isOver} /> }    
        </div>

        { ( gameIsStarted  &&  wordIsValid && gameIsFinished )  &&  <GameOver
            status={modalStatus} 
            word={word}
            close={resetGame}
        /> }
        </>
    )
}

export default LeJeuDuPendu