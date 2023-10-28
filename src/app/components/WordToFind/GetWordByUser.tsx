import React from 'react'
import Input from '../Input';
import Button from '../Button';

function GetWordByUser({ word, handleChange, onFocus, handleClick, error }) {
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

export default GetWordByUser