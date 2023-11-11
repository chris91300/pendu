"use client"

import React from 'react';
import GetWordByUser from './GetWordByUser'
import RandomWord from './RandomWord';
import Container from '../container/Container';
import useAbstractDataForWordToFind from './hooks/useAbstractDataForWordToFind';


type AbstractDataType = [
    string,
    boolean,
    (val: string) => void,
    () => void,
    () => void,
    (word: string) => void
    ]

type WordToFindProps = {
    onValid: (word: string) => void
}
/**
 * la partie ou un joueur peut soit entrer le mot à deviner, soit demander un mot aléatoire
 * 
 * @param {function} onValid callback qui retourne la valeur de l'input au clic sur valider
 * @returns les différents components
 */
export default function WordToFind({onValid}: WordToFindProps){

    const [
        word,
        error,
        handleChange,
        onFocus,
        handleClick,
        getRandomWord
        ]: AbstractDataType = useAbstractDataForWordToFind(onValid);



    return (
        <Container className="flex flex-col items-center w-full py-5">
            <GetWordByUser
                word={ word }
                handleChange={ handleChange }
                onFocus={ onFocus }
                handleClick={ handleClick }
                error={ error }
            />

            <RandomWord onClick={ getRandomWord }/>
        </Container>
    )
  }