
"use client"

import React from 'react';
import ModalSuccess from './ModalSuccess/ModalSuccess';
import ModalError from './ModalError/ModalError';
import useSetTimeOutToCloseModal from '../hooks/useSetTimeOutToCloseModal'
import Container from '../container/Container';
import ButtonCloseWindow from '../buttonCloseWindow/ButtonCloseWindow' 
import isSuccess from './isSuccess';


type ModalProps = {
    status: "success" | "error",
    letter: string,
    totalLetter: number,
    tries: number,
    hiddeModal: ()=>void

}


export function Modal({status, letter, totalLetter, tries, hiddeModal}: ModalProps) {

    const doesUserFoundGoodLetter = isSuccess(status);
    const bgColor = doesUserFoundGoodLetter ? 'bg-green-500' : 'bg-red-400'
    const classNameModal = `absolute top-0 right-0 w-full h-full flex justify-center ${bgColor}`
    const classNameContainer = `relative flex flex-col justify-center items-center w-full p-3`;

    const content = doesUserFoundGoodLetter ? <ModalSuccess letter={letter} totalLetter={totalLetter}/> : <ModalError letter={letter} tries={tries}/>;
    
    useSetTimeOutToCloseModal(hiddeModal, 3000, []);


    return(
        <Container className={classNameModal}>
            <Container className={classNameContainer}>
                <ButtonCloseWindow onClick={hiddeModal} />
                {content}
            </Container>
        </Container>
    );

}