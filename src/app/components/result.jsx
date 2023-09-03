import React from 'react'

/**
 * partie du jeu où le mot à trouver apparaît modifier avec des " _ "
 * quand les lettres correspondante n'ont pas été trouvées
 * @param {Object} hiddenWord le mot caché
 * @returns 
 */
const Result = ({ hiddenWord }) => {

    return (
        <div className="block block_col block_grow">
            <h2>Mot a trouvé</h2>
            <p className="wordHidden">{hiddenWord}</p>
        </div>
    )
  }


export default Result;
