import React from "react";
import { GameOverTextPropsType } from "./gameOverText";

export default function GameOverText(props: GameOverTextPropsType) {
    const { text, word } = props;
    return (
        <p className="text-center text-black">
            {text} <span className="font-bold uppercase">{word}</span>
        </p>
    );
}
