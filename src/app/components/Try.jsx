import React from 'react'


/**
 * partie du jeu qui affiche le nombre d'erreur restant à l'utilisateur avant d'être pendu
 * @param {Object} essais le nombre d'essais / erreur qu'il reste à l'utilisateur pour trouver le mot
 * @returns 
 */
const Try = ({tries}) => {

    let error = tries <= 1 ? "erreur" : "erreurs";    

    return (
        <div className="block block_col block_grow">
            <h2>ESSAIS</h2>
            <p>Vous avez droit à {tries} {error}</p>
        </div>
    )
}

export default Try







