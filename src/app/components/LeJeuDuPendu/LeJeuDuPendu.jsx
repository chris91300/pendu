import React, { useState } from 'react'

import {WordToFind} from '../WordToFind/wordToFind';
import TryToFindTheWord from "../TryToFindTheWord/TryToFindTheWord";
import { toUpper, not } from "ramda";
import GameOver from '../GameOver/GameOver'
import Container from '../container/Container';


function LeJeuDuPendu() {

    const [gameIsStarted, setGameIsStarted] = useState(false);
    const [gameIsFinished, setGameIsFinished] = useState(false);
    const [word, setWord] = useState("");
    const [modalStatus, setModalStatus] = useState("success");

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
        <Container id="app_container" className="block block_row">
        
            {
                ( not( gameIsStarted )  &&  not( wordIsValid ) )
                &&
                <WordToFind onValid={validWord}/>
            }

            {
                ( gameIsStarted  &&  wordIsValid && not( gameIsFinished ))
                && 
                <TryToFindTheWord wordToFind={word} isOver={isOver} />
            }   

            {
                ( gameIsStarted  &&  wordIsValid && gameIsFinished ) 
                &&
                <GameOver status={modalStatus} word={word} close={resetGame} />
            } 
        </Container>
    )
}

export default LeJeuDuPendu