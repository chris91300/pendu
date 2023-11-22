"use client";
import React from "react";
import useClickOnLetter from "./hooks/useClickOnLetter";
import LetterButton from "./letterButton/LetterButton";
import { LetterProps } from "../keyboard";

/**
 * affiche la lettre correspondante à sa variable lettre
 * @param {Object} props
 * @returns
 */
export default function Letter(props: LetterProps): JSX.Element {
    const { lettre, word, onClickLetter } = props;
    const { css, onClick, disabled } = useClickOnLetter(
        lettre,
        word,
        onClickLetter
    );

    return (
        <LetterButton color={css} onClick={onClick} disabled={disabled}>
            {lettre}
        </LetterButton>
    );
}
