import React from "react";
import useDataForGame from "./hooks/useDataForGame";
import WordToFind from "./WordToFind/WordToFind";
import TryToFindTheWord from "./TryToFindTheWord/TryToFindTheWord";
import { not } from "ramda";
import GameOver from "./GameOver/GameOver";
import { ForwardContainer } from "../globals/container/Container";

export default function LeJeuDuPendu() {
    const {
        mainContainer,
        gameIsStarted,
        wordIsValid,
        word,
        gameIsFinished,
        gameOverStatus,
        validWord,
        isOver,
        resetGame,
    } = useDataForGame();

    return (
        <ForwardContainer
            className="relative bg-black bg-opacity-70"
            ref={mainContainer}
        >
            {not(gameIsStarted) && not(wordIsValid) && (
                <WordToFind onValid={validWord} />
            )}

            {gameIsStarted && wordIsValid && not(gameIsFinished) && (
                <TryToFindTheWord wordToFind={word} isOver={isOver} />
            )}

            {gameIsStarted && wordIsValid && gameIsFinished && (
                <GameOver
                    status={gameOverStatus}
                    word={word}
                    close={resetGame}
                />
            )}
        </ForwardContainer>
    );
}
