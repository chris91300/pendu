import React from 'react';
import Image from 'next/image';
import getDataForModalGame from '../../utils/getDataForModalGame'
import GameOverTitle from './GameOverTitle'
import GameOverText from './GameOverText'
import Container from '../container/Container';

type GameLostPropsType = {
    word: string
}

export default function GameLost({word}: GameLostPropsType){
    
    const { img, alt, side } = getDataForModalGame("fail");    
   
    return (
        <Container className="flex flex-col justify-center items-center">
            <GameOverTitle>Vous avez été pendu</GameOverTitle> 
            <Image className="my-3"  src={ img } alt={ alt }  width={ side } height={ side }/>
            <GameOverText text="vous avez perdu. le mot à trouver était" word={word}/>
        </Container>
    )

}