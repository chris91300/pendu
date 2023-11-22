import React from "react";
import Image from "next/image";
import getDataForModalGame from "../../../../utils/getDataForModalGame";
import GameOverTitle from "../globals/gameOverTitle/GameOverTitle";
import GameOverText from "../globals/gameOverText/GameOverText";
import Container from "../../../globals/container/Container";
import { GameWonPropsType } from "./gameWon";

export default function GameWon(props: GameWonPropsType) {
    const { word } = props;
    const { img, alt, side } = getDataForModalGame("victory");

    return (
        <Container className="flex flex-col justify-center items-center">
            <GameOverTitle>félicitations</GameOverTitle>
            <Image
                className="my-3"
                src={img}
                alt={alt}
                width={side}
                height={side}
            />
            <GameOverText text="Vous avez trouvé le mot" word={word} />
        </Container>
    );
}
