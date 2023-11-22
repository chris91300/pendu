import React from "react";
import Image from "next/image";
import getDataForModalGame from "../../../../utils/getDataForModalGame";
import GameOverTitle from "../globals/gameOverTitle/GameOverTitle";
import GameOverText from "../globals/gameOverText/GameOverText";
import Container from "../../../globals/container/Container";
import { GameLostPropsType } from "./gameLost";

export default function GameLost(props: GameLostPropsType) {
    const { word } = props;
    const { img, alt, side } = getDataForModalGame("fail");

    return (
        <Container className="flex flex-col justify-center items-center">
            <GameOverTitle>Vous avez été pendu</GameOverTitle>
            <Image
                className="my-3"
                src={img}
                alt={alt}
                width={side}
                height={side}
            />
            <GameOverText
                text="vous avez perdu. le mot à trouver était "
                word={word}
            />
        </Container>
    );
}
