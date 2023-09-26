
"use client"

import React from 'react'
import useRandomWord from '../hooks/useRandomWord'
import getRandomWordFrom from '../getRandomWordFrom'
import Loading from '../Loading'


/**
 * 
 * @param {Object} onClick function qui retourne le mot définie aléatoirement
 * @returns 
 */
export default function RandomWord ({onClick}) {

    const [ list, loading ] = useRandomWord()
    
    const getRandomWord = () => {
        const word = getRandomWordFrom(list)
        onClick(word);
    }


    return loading ?
            <button onClick={ getRandomWord }>obtenir un mot aléatoirement</button>
            : 
            <Loading />
        
}