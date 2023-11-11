"use client"
import React from 'react';
import useClickOnLetter from '../../hooks/useClickOnLetter'
import LetterButton from './LetterButton'



type LetterProps = {
  lettre: string,
  word: string[],
  onClickLetter: (letter: string) => void
}

/**
 * affiche la lettre correspondante à sa variable lettre
 * @param {Object} props
 * @returns 
 */
const Letter = ({ lettre, word, onClickLetter }: LetterProps): JSX.Element => { 

const [ css, onClick, used ] = useClickOnLetter(lettre, word, onClickLetter)

  return <LetterButton color={ css } onClick={ onClick } disabled={ used } >
            {lettre}
          </LetterButton>
}


export default Letter;