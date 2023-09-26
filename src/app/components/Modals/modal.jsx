
"use client"

import React from 'react';
import ModalSuccess from './ModalSuccess/ModalSuccess';
import ModalError from './ModalError/ModalError';
import useSetTimeOutToCloseModal from '../hooks/useSetTimeOutToCloseModal'
import Container from '../container/Container';
import ButtonCloseWindow from '../buttonCloseWindow/ButtonCloseWindow'


export function Modal({status, letter, totalLetter, tries, hiddeModal}) {
    
    const classNameModal = `modal modal_${status}`;
    const classNameContainer = `modal_container modal_container--small modal_container--${status}`;

    const content = status === 'success' ? <ModalSuccess letter={letter} totalLetter={totalLetter}/> : <ModalError letter={letter} tries={tries}/>;

    
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