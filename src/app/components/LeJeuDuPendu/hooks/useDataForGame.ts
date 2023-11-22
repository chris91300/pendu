import { useState, useRef } from "react";
import { toUpper } from "ramda";
import { GameOverStatus } from "../GameOver/gameOver";
import { DataForGameReturnTypes } from "./dataForGame";

export default function useDataForGame(): DataForGameReturnTypes {
    const [gameIsStarted, setGameIsStarted] = useState(false);
    const [gameIsFinished, setGameIsFinished] = useState(false);
    const [word, setWord] = useState("");
    const [gameOverStatus, setGameOverStatus] =
        useState<GameOverStatus>("victory");
    const mainContainer = useRef<HTMLDivElement>({} as HTMLDivElement);
    const wordIsValid = word !== "";

    const validWord = (word: string) => {
        setWord(toUpper(word));
        setGameIsStarted(true);
        mainContainer?.current?.scrollIntoView();
    };

    const resetGame = () => {
        setWord("");
        setGameIsFinished(false);
        setGameIsStarted(false);
    };

    const isOver = (status: GameOverStatus) => {
        setGameOverStatus(status);
        setGameIsFinished(true);
    };

    return {
        mainContainer,
        gameIsStarted,
        wordIsValid,
        word,
        gameIsFinished,
        gameOverStatus,
        validWord,
        isOver,
        resetGame,
    };
}
