import React from "react";
import GameWon from "./gameWon/GameWon";
import GameLost from "./gameLost/GameLost";
import Container from "../../globals/container/Container";
import ButtonCloseWindow from "../../globals/buttonCloseWindow/ButtonCloseWindow";
import Button from "../../globals/button/Button";
import { isVictory } from "../../../utils/isVictory";
import { GameOverPropsType } from "./gameOver";

export default function GameOver(props: GameOverPropsType) {
    const { status, word, close } = props;
    const userWin = isVictory(status);
    const content = userWin ? (
        <GameWon word={word} />
    ) : (
        <GameLost word={word} />
    );
    const bgColor = userWin ? "bg-green-500" : "bg-red-400";
    const classNameMainContainer = `w-full h-[450px] flex justify-center`;
    const classNameContainer = `relative flex flex-col justify-center items-center w-full md:w-[600px] lg:w-[800px] p-3 ${bgColor}`;

    return (
        <Container className={classNameMainContainer}>
            <Container className={classNameContainer}>
                <ButtonCloseWindow onClick={close} />
                {content}
                <Button onClick={close}>nouvelle partie</Button>
            </Container>
        </Container>
    );
}
