import React from 'react';


export default function ModalSuccess({ letter, totalLetter}){

    return <p className="modal_text">
                Bravo. Il y a {totalLetter} <span className="bold">{letter}</span>
            </p>
}