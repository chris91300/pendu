import React from 'react';


export default function ModalSuccess({ letter, totalLetter}){

    return <p className='text-black'>
                Bravo. Il y a {totalLetter} <span className="font-bold">{letter}</span>
            </p>
}