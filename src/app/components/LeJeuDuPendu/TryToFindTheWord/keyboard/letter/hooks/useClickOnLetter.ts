"use client";
import React, { useState } from "react";
import { includes, __, not } from "ramda";
import { useClickOnLetterReturn } from "./useOnClickLetter";
import { ColorKeyType } from "../../keyboard";

function useClickOnLetter(
    letter: string,
    word: string[],
    onClickLetter: (letter: string) => void
): useClickOnLetterReturn {
    const [css, setCSS] = useState<ColorKeyType>("[wheat]");
    const [letterAlreadyUsed, setLetterAlreadyUsed] = useState(false);
    const disabled = letterAlreadyUsed;
    const isItInWordToFind = includes(__, word);

    const onClick = () => {
        if (not(letterAlreadyUsed)) {
            const color = isItInWordToFind(letter) ? "green" : "red";
            setCSS(color);
            setLetterAlreadyUsed(true);
            onClickLetter(letter);
        }
    };

    return { css, onClick, disabled };
}

export default useClickOnLetter;
