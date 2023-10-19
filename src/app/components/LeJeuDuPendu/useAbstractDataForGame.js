
import { useState, useRef } from "react";
import { toUpper } from 'ramda'

export default function useAbstractDataForGame() {

    const [gameIsStarted, setGameIsStarted] = useState(false);
    const [gameIsFinished, setGameIsFinished] = useState(false);
    const [word, setWord] = useState("");
    const [gameOverStatus, setGameOverStatus] = useState("success");
    const mainContainer = useRef(null)
    const wordIsValid = word !== "";

    const validWord = (word) => { 
        setWord( toUpper(word) );
        setGameIsStarted(true)
        mainContainer.current.scrollIntoView()
    }


    const resetGame = ()=>{
        setWord("")
        setGameIsFinished(false)
        setGameIsStarted(false)
    }


    const isOver = (status)=>{
        setGameOverStatus(status);
        setGameIsFinished(true);
    }


    return [ mainContainer, gameIsStarted, wordIsValid, word, gameIsFinished, gameOverStatus, validWord,   isOver, resetGame ]
}
