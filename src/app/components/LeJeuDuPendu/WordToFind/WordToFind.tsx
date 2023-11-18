"use client"

import React from 'react';
import GetWordByUser from './GetWordByUser/GetWordByUser'
import RandomWord from './randomWord/RandomWord';
import Container from '../../globals/container/Container';
import useDataForWordToFind from './hooks/useDataForWordToFind';
import { WordToFindProps } from './wordToFind'


/**
 * la partie ou un joueur peut soit entrer le mot à deviner, soit demander un mot aléatoire
 * 
 * @param {function} onValid callback qui retourne la valeur de l'input au clic sur valider
 * @returns les différents components
 */
export default function WordToFind({onValid}: WordToFindProps){

    const {
        word,
        error,
        handleChange,
        onFocus,
        handleClick,
        getRandomWord
    }= useDataForWordToFind(onValid);



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