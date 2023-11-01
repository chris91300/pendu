
import React from 'react';
import Image from 'next/image';
import getDataForModalGame from '../../utils/getDataForModalGame'
import GameOverTitle from './GameOverTitle'
import GameOverText from './GameOverText'
import Container from '../container/Container';

export default function GameWon({word}: { word: string}){

    const { img, alt, side } = getDataForModalGame("victory");
    
    
    return (
        <Container className="flex flex-col justify-center items-center">
            <GameOverTitle>félicitations</GameOverTitle>            
            <Image className="my-3" src={ img } alt={ alt } width={ side } height={ side }/>
            <GameOverText text="Vous avez trouvé le mot" word={word}/>
        </Container>
    )

}
