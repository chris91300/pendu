"use client"

import React, {useState} from 'react';
import WordToFindContainer from './WordToFindContainer'
import GetWordByUser from './GetWordByUser'
import RandomWord from './RandomWord';
import onlyLetters from '../utils/onlyLetters'
import notEmpty from '../utils/notEmpty'
/**
 * la partie ou un joueur peut soit entrer le mot à deviner, soit demander un mot aléatoire
 * 
 * @param {Object} onValid callback qui retourne la valeur de l'input au clic sur valider
 * @returns les différents components
 */
export function WordToFind({onValid}){

    const [word, setWord] = useState("");
    const [error, setError] = useState(false);



    /**
     * chaque lettre tapée par l'utilisateur fait enregistrer la valeur de l'input dans la variable word
     * @param {string} val la valeur de l'input
     */
    const handleChange = (val) => { setWord(val); }



    /**
     * lorsque l'utilisateur clic sur l'input, on cache le message d'erreur de format
     */
    const onFocus = ()=>{ setError(false); }


    /**
     * si l'utilisateur clic sur le boutton valider,
     * alors on vérifie le format du mot 
     * si le format n'est pas valable (uniquement des lettres sans accent) alors l'erreur format sera affiché
     * sinon on retourne le mot à l'Application via la props onValid
     */
    const handleClick = () => {
        
        if( notEmpty(word) )
        {
            if(onlyLetters(word))
            {
                onValid(word);
            }
            else {
                setError(true);
            }
        } 
    }

    

    /**
     * retourne à l'Application le mot aléatoire retourner par le component RandomWord
     * @param {string} word
     */
    const getRandomWord = (word)=>{
        onValid(word);
    }



    return (
    <WordToFindContainer>
        <GetWordByUser
            word={ word }
            handleChange={ handleChange }
            onFocus={  onFocus}
            handleClick={ handleClick }
            error={ error }
        />

        <RandomWord onClick={getRandomWord}/>
    </WordToFindContainer>
    )
  }