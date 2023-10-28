import React from 'react';
import ModalErrorImage from './ModalErrorImage' 
import ModalErrorText from './ModalErrorText'
import ModalErrorLastTry from './ModalErrorLastTry'
import Container from '../../container/Container';

import "../../../../../public/images/error/error_9_tries_left.jpg";
import "../../../../../public/images/error/error_8_tries_left.jpg";
import "../../../../../public/images/error/error_7_tries_left.jpg";
import "../../../../../public/images/error/error_6_tries_left.jpg";
import "../../../../../public/images/error/error_5_tries_left.jpg";
import "../../../../../public/images/error/error_4_tries_left.jpg";
import "../../../../../public/images/error/error_3_tries_left.jpg";
import "../../../../../public/images/error/error_2_tries_left.jpg";
import "../../../../../public/images/error/error_1_tries_left.jpg";


type ModalErrorProps = {
    letter: string,
    tries: number
}


export default function ModalError({ letter, tries }: ModalErrorProps){
    
    const imagePath = `/images/error/error_${tries}_tries_left.jpg`;
    const imageSide = 250;
    
    return (
        <Container className="flex flex-col">
            <ModalErrorImage src={ imagePath } imageSide={ imageSide } />
            <ModalErrorText letter={letter} />
            <ModalErrorLastTry tries={tries} />
        </Container>
    )
}