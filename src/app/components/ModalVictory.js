
import React from 'react';
import Image from 'next/image';
import getDataForModalGame from '../utils/getDataForModalGame'

export default function ModalVictory({word}){

    const { img, alt, side } = getDataForModalGame("victory");
    word = word.toUpperCase();
    
    return (
        <div className="col">
            <Image src={ img } alt={ alt } width={ side } height={ side }/>
            <p>Vous avez trouvé le mot <span className="bold">{ word }</span></p>
        </div>
    )

}
