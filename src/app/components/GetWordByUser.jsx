import React from 'react'
import Input from './Input';

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
    <button onClick={handleClick}>valider</button>
    </>
  )
}

export default GetWordByUser