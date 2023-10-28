
import { useState, useRef } from "react";
import { toUpper } from 'ramda'

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

export default function useAbstractDataForGame(): DataForGameTypes {

    const [gameIsStarted, setGameIsStarted] = useState(false);
    const [gameIsFinished, setGameIsFinished] = useState(false);
    const [word, setWord] = useState("");
    const [gameOverStatus, setGameOverStatus] = useState<StatusType>("victory"); 
    const mainContainer = useRef<HTMLDivElement>(null)
    const wordIsValid = word !== "";

    const validWord = (word: string) => { 
        
        setWord( toUpper(word) );
        setGameIsStarted(true)
        mainContainer.current?.scrollIntoView()
    }


    const resetGame = ()=>{
        setWord("")
        setGameIsFinished(false)
        setGameIsStarted(false)
    }


    const isOver = (status: StatusType)=>{
        setGameOverStatus(status);
        setGameIsFinished(true);
    }


    return [ mainContainer as RefObject<HTMLDivElement>, gameIsStarted, wordIsValid, word, gameIsFinished, gameOverStatus, validWord,   isOver, resetGame ]
}
