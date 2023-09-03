
"use client"

import React, {useEffect} from 'react';
import ModalSuccess from './ModalSuccess';
import ModalError from './ModalError';
import useSetTimeOutToCloseModal from './hooks/useSetTimeOutToCloseModal'


export function Modal({status, modalIsVisible, letter, totalLetter, word, tries, hiddeModal}) {
    
    const modalCss = modalIsVisible ? "visible" : "hidden";
    const classNameModal = `modal modal_${status} modal--${modalCss}`;
    const classNameContainer = `modal_container modal_container--small modal_container--${status}`;
    const content = status === 'success' ? <ModalSuccess letter={letter} totalLetter={totalLetter}/> : <ModalError letter={letter} tries={tries}/>;

    
    useSetTimeOutToCloseModal(hiddeModal, 3000, [modalCss]);
   


    return(
        <div className={classNameModal}>
            <div className={classNameContainer}>
                <button className="button_hide_modal" onClick={hiddeModal}>X</button>
                {content}
            </div>
        </div>
    );

}