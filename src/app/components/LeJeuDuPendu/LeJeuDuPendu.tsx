import React, { useRef, useState } from 'react'
import useAbstractDataForGame from './useAbstractDataForGame'
import {WordToFind} from '../WordToFind/wordToFind';
import TryToFindTheWord from "../TryToFindTheWord/TryToFindTheWord";
import { not } from "ramda";
import GameOver from '../GameOver/GameOver'
import { ForwardContainer } from '../container/Container';

interface RefObject<T> {
    readonly current: T;
  }
  
type StatusType = "victory" | "fail"

type DataForGameTypes = [
    RefObject<HTMLDivElement>,
    boolean,
    boolean,
    string,
    boolean,
    StatusType,
    (word: string) => void,
    (status: StatusType) => void,
    () => void
]

function LeJeuDuPendu() {

    const [
        mainContainer,
        gameIsStarted,
        wordIsValid,
        word,
        gameIsFinished,
        gameOverStatus,
        validWord,
        isOver,
        resetGame ]: DataForGameTypes = useAbstractDataForGame()


    return (
        <ForwardContainer className="relative bg-black bg-opacity-70" ref={mainContainer}>
            
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
                <GameOver status={gameOverStatus} word={word} close={resetGame} />
            } 
        </ForwardContainer>
    )
}

export default LeJeuDuPendu