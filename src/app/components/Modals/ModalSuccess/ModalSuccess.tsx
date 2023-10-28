import React from 'react';


type ModalSuccessProps = {
    letter: string,
    totalLetter: number
}

export default function ModalSuccess({ letter, totalLetter}: ModalSuccessProps){

    return <p className='text-black'>
                Bravo. Il y a {totalLetter} <span className="font-bold">{letter}</span>
            </p>
}