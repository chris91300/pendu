import React from 'react'
import Container from '../../container/Container';

/**
 * partie du jeu qui affiche le nombre d'erreur restant à l'utilisateur avant d'être pendu
 * @param {Object} essais le nombre d'essais / erreur qu'il reste à l'utilisateur pour trouver le mot
 * @returns 
 */
const Try = ({tries}) => {

    let error = tries <= 1 ? "erreur" : "erreurs";    

    return (
        <Container className="block block_col block_grow">
            <h2>ESSAIS</h2>
            <p>Vous avez droit à {tries} {error}</p>
        </Container>
    )
}

export default Try







