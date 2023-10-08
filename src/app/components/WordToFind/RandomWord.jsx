
"use client"

import React from 'react'
import useRandomWord from '../hooks/useRandomWord'
import getRandomWordFrom from '../getRandomWordFrom'
import Loading from '../Loading'
import Button from '../Button'


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
            <Button onClick={ getRandomWord }>obtenir un mot aléatoirement</Button>
            : 
            <Loading />
        
}