"use client"

import React from 'react';
import GetWordByUser from './GetWordByUser'
import RandomWord from './RandomWord';
import Container from '../container/Container';
import useAbstractDataForWordToFind from './useAbstractDataForWordToFind'
/**
 * la partie ou un joueur peut soit entrer le mot à deviner, soit demander un mot aléatoire
 * 
 * @param {Object} onValid callback qui retourne la valeur de l'input au clic sur valider
 * @returns les différents components
 */
export function WordToFind({onValid}){

    const [
        word,
        error,
        handleChange,
        onFocus,
        handleClick,
        getRandomWord
        ] = useAbstractDataForWordToFind(onValid);



    return (
        <Container className="block block_col block_grow">
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