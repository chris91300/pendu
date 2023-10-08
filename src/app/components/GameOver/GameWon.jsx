
import React from 'react';
import Image from 'next/image';
import getDataForModalGame from '../../utils/getDataForModalGame'
import GameOverTitle from './GameOverTitle'
import GameOverText from './GameOverText'
import Container from '../container/Container';

export default function GameWon({word}){

    const { img, alt, side } = getDataForModalGame("victory");
    
    
    return (
        <Container className="col">
            <GameOverTitle>félicitations</GameOverTitle>            
            <Image className="mx-auto" src={ img } alt={ alt } width={ side } height={ side }/>
            <GameOverText text="Vous avez trouvé le mot" word={word}/>
        </Container>
    )

}
