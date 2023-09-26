import React from 'react';
import Image from 'next/image';
import getDataForModalGame from '../../utils/getDataForModalGame'
import GameOverTitle from './GameOverTitle'
import GameOverText from './GameOverText'
import Container from '../container/Container';

export default function GameLost({word}){
    
    const { img, alt, side } = getDataForModalGame("fail");
    
    return (
        <Container className="col">
            <GameOverTitle>Vous avez été pendu</GameOverTitle> 
            <Image src={ img } alt={ alt }  width={ side } height={ side }/>
            <GameOverText text="vous avez perdu. le mot à trouver était" word={word}/>
        </Container>
    )

}