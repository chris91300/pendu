
"use client"

import React from 'react'
import { not } from 'ramda'
import useGetRandomWord from './hooks/useGetRandomWord'
import Loading from '../Loading'
import Button from '../Button'
import ErrorApi from './ErrorApi'

type RandomWordProps = {
    onClick: (word: string) => void
}

/**
 * 
 * @param {Object} onClick function qui retourne le mot définie aléatoirement
 * @returns 
 */
export default function RandomWord ({onClick}: RandomWordProps) {

    const [ getRandomWord, loading, error ] = useGetRandomWord(onClick)



    return (
        <>
        { error &&  <ErrorApi /> }
        { (not(error) && loading ) && <Loading /> }
        { (not(error) && not(loading) ) && <Button onClick={ getRandomWord }>obtenir un mot aléatoirement</Button> }
        </> 
        
    )
            
        
}