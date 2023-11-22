import React from "react";
import { GameOverTitlePropsType } from "./gameOverTitle";

export default function GameOverTitle(props: GameOverTitlePropsType) {
    const { children } = props;
    return (
        <h2 className="text-center text-black text-4xl uppercase">
            {children}
        </h2>
    );
}
