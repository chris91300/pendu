import React from 'react'
import Input from '../../../globals/input/Input';
import Button from '../../../globals/button/Button';
import { GetWordByUserProps } from './getWordByUser'


export default function GetWordByUser({ word, handleChange, onFocus, handleClick, error }: GetWordByUserProps) {
  return (
    <>
    <Input 
        label="Entrez un mot à trouver pour commencer une partie"
        type="text"
        name="word_to_find"
        word={word}
        onChange={handleChange}
        onFocus={onFocus}
        error={error}
    />
    <Button extendClassName='block' onClick={handleClick}>valider</Button>
    </>
  )
}
