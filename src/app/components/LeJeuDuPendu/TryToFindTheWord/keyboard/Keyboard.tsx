import React from "react";
import { map } from "ramda";
import letterBuilder from "./letter/letterBuilder";
import { a_m, n_z } from "../../../../utils/alphabet";
import KeyboardAToM from "./KeyboardAToM/KeyboardAToM";
import KeyboardNToZ from "./KeyboardNToZ/KeyboardNToZ";
import { KeyboardProps } from "./keyboard";

function Keyboard({ word, clickOnLetter }: KeyboardProps) {
    const getLetterComponent = letterBuilder(word, clickOnLetter);
    const KeysAtoM = map(getLetterComponent, a_m);
    const KeysNtoZ = map(getLetterComponent, n_z);

    return (
        <>
            <KeyboardAToM>{KeysAtoM}</KeyboardAToM>

            <KeyboardNToZ>{KeysNtoZ}</KeyboardNToZ>
        </>
    );
}

export default Keyboard;
