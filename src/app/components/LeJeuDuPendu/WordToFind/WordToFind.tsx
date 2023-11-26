"use client";

import React from "react";
import GetWordByUser from "./GetWordByUser/GetWordByUser";
import RandomWord from "./randomWord/RandomWord";
import Container from "../../globals/container/Container";
import useDataForWordToFind from "./hooks/useDataForWordToFind";
import { WordToFindProps } from "./wordToFind";

export default function WordToFind(props: WordToFindProps) {
    const { onValid } = props;
    const { word, error, handleChange, onFocus, handleClick, getRandomWord } =
        useDataForWordToFind(onValid);

    return (
        <Container className="flex flex-col items-center w-full py-5">
            <GetWordByUser
                word={word}
                handleChange={handleChange}
                onFocus={onFocus}
                handleClick={handleClick}
                error={error}
            />

            <RandomWord onClick={getRandomWord} />
        </Container>
    );
}
