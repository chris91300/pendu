import React from 'react'
import Container from '../../container/Container';
import getHiddenWordComponents from './getHiddenWordComponents'

/**
 * partie du jeu où le mot à trouver apparaît modifier avec des " _ "
 * quand les lettres correspondante n'ont pas été trouvées
 * @param {Object} hiddenWord le mot caché
 * @returns 
 */
const Result = ({ hiddenWord }) => {

    const hiddenWordComponents = getHiddenWordComponents(hiddenWord)
    
    return (
        <Container className="flex flex-col grow mt-5">
            <h2 className='text-[wheat] font-bold'>Mot a trouvé</h2>
            <p className='text-[wheat] text-center'>{hiddenWordComponents}</p>
        </Container>
    )
  }


export default Result;
