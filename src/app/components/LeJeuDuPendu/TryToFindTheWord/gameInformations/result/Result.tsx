import React from "react";
import Container from "../../../../globals/container/Container";
import getHiddenWordComponents from "./utils/getHiddenWordComponents";
import { ResultProps } from "./result";

/**
 * partie du jeu où le mot à trouver apparaît modifier avec des " _ "
 * quand les lettres correspondante n'ont pas été trouvées
 * @param {Object} hiddenWord le mot caché
 * @returns
 */
export default function Result(props: ResultProps) {
    const { hiddenWord } = props;
    const hiddenWordComponents = getHiddenWordComponents(hiddenWord);

    return (
        <Container className="flex flex-col items-center grow mt-5">
            <h2 className="text-[wheat] font-bold">Mot à trouver</h2>
            <p className="text-[wheat]">{hiddenWordComponents}</p>
        </Container>
    );
}
