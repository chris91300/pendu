import React from "react";
import Container from "../../../../globals/container/Container";
import { TryProps } from "./try";

/**
 * partie du jeu qui affiche le nombre d'erreur restant à l'utilisateur avant d'être pendu
 * @param {Object} essais le nombre d'essais / erreur qu'il reste à l'utilisateur pour trouver le mot
 * @returns
 */
export default function Try(props: TryProps) {
    const { tries } = props;
    let error = tries <= 1 ? "erreur" : "erreurs";

    return (
        <Container className="flex flex-col items-center">
            <h2 className="text-[wheat] font-bold">ESSAIS</h2>
            <p className="text-[wheat]">
                Vous avez droit à {tries} {error}
            </p>
        </Container>
    );
}
