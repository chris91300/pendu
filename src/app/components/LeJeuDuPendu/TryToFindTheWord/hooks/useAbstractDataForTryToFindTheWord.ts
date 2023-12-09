import { useState } from "react";
import { includes, __ } from "ramda";
import getUpperCaseArrayFrom from "../../../../utils/getUpperCaseArrayFrom";
import replaceLettersByUnderscore from "../../../../utils/replaceLettersByUnderscore";
import isItTheLastTry from "../../../../utils/isItTheLastTry";
import { GameOverStatus } from "../../GameOver/gameOver";
import { ModalStatus } from "../Modals/modal";
import { ReturnTypes } from "./dataForTryToFindTheWord";
import splitAll from "../../../../utils/splitAll";
import updateWordHiddenByLetter from "./utils/updateWordHiddenByLetter";
import hiddenWordIsFound from "./utils/hiddenWordIsFound";

function useAbstractDataForTryToFindTheWord(
    wordToFind: string,
    isOver: (text: GameOverStatus) => void
): ReturnTypes {
    const wordToFindWithUnderscore = replaceLettersByUnderscore(wordToFind);
    const word = getUpperCaseArrayFrom(wordToFind);
    const [tries, setTries] = useState(10);
    const [wordHidden, setWordHidden] = useState(wordToFindWithUnderscore);
    const [wordHiddenSplitted, setwordHiddenSplitted] = useState(
        splitAll(wordHidden)
    );
    const [letter, setLetter] = useState("");
    const [totalLetter, setTotalLetter] = useState(0);
    const [modalStatus, setModalStatus] = useState<ModalStatus>("success");
    const [modalIsVisible, setModalIsVisible] = useState(false);

    const playerWon = () => isOver("victory");
    const playerFailed = () => isOver("fail");
    const isInWord = includes(__, word);

    function clickLetter(lettre: string) {
        isInWord(lettre) ? letterExist(lettre) : letterNotExist(lettre);
    }

    function letterExist(letter: string) {
        /*let wordHidden = wordHiddenSplitted;
        let totalLetterFound = 0;

        word.forEach((char: string, index: number) => {
            if (equals(char, lettre)) {
                wordHidden = update(index, lettre, wordHidden);
                totalLetterFound++;
            }
        });*/
        const { wordHidden, totalLetterFound } = updateWordHiddenByLetter(
            word,
            wordHiddenSplitted,
            letter
        );

        hiddenWordIsFound(wordHidden)
            ? success(wordHidden, letter, totalLetterFound)
            : playerWon();
    }

    function letterNotExist(lettre: string) {
        isItTheLastTry(tries) ? playerFailed() : error(lettre);
    }

    function success(
        wordHiddenSplitted: string[],
        lettre: string,
        totalLetterFound: number
    ) {
        const wordHidden = wordHiddenSplitted.join("");
        setwordHiddenSplitted(wordHiddenSplitted);
        setWordHidden(wordHidden);
        setModalStatus("success");
        setModalIsVisible(true);
        setLetter(lettre);
        setTotalLetter(totalLetterFound);
    }

    function error(lettre: string) {
        setTries(tries - 1);
        setModalStatus("error");
        setModalIsVisible(true);
        setLetter(lettre);
    }

    function hiddeModal() {
        setModalIsVisible(false);
    }

    return {
        tries,
        wordHidden,
        word,
        clickLetter,
        modalStatus,
        modalIsVisible,
        letter,
        totalLetter,
        hiddeModal,
    };
}

export default useAbstractDataForTryToFindTheWord;
