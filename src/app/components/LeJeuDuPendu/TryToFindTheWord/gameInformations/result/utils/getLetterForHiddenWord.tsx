import React from "react";
import uniqid from "uniqid";

function getLetterForHiddenWord(letter: string) {
    return (
        <span key={uniqid()} className="tracking-[1rem] last:tracking-normal">
            {letter}
        </span>
    );
}

export default getLetterForHiddenWord;
