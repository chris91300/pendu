import React from 'react';
import Image from 'next/image';

import getDataForModalGame from '../utils/getDataForModalGame'

export default function ModalFail({word}){

    
    
    word = word.toUpperCase()
    const { img, alt, side } = getDataForModalGame("fail");
    return (
        <div className="col">
            <Image src={ img } alt={ alt }  width={ side } height={ side }/>
            <p>vous avez perdu. le mot à trouver était <span className="bold"> { word }</span></p>
        </div>
    )

}