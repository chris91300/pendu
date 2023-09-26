"use client"
import React from 'react';
import useClickOnLetter from '../../hooks/useClickOnLetter'
import LetterButton from './LetterButton'
/**
 * affiche la lettre correspondante à sa variable lettre
 * @param {Object} props
 * @returns 
 */
const Letter = ({ lettre, word, onClickLetter }) => { 

const [ css, onClick, used ] = useClickOnLetter(lettre, word, onClickLetter)

  return <LetterButton color={ css } onClick={ onClick } disabled={ used } >
            {lettre}
          </LetterButton>
}


export default Letter;