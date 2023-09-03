
"use client"

import React, { useEffect, useState } from 'react'
import getRandomArbitrary from '../utils/getRandomArbitrary';
import LETTERS from '../letters';



/**
 * 
 * @param {Object} onClick function qui retourne le mot définie aléatoirement
 * @returns 
 */
export default function RandomWord ({onClick}) {

    const [list, setList ] = useState("none");
    const [ text, setText ] = useState("chargements des mots")

    /**
     * au premier rendu du component on va chercher la liste des mots 
     * pour ouvoir en prendre un de manière aléatoire
     */
    useEffect(()=>{

    fetch("/project/pendu/getWords")
    .then((response)=>{            
        if(response.ok){                
            response.json()
            .then((json)=>{
                setList(json);
                setText("ou obtenir un mot aléatoirement")
            })
        }
    })
    }, [])
    
    
    /**
     * récupère un mot de manière aléatoire dans les listes de mot
     */
    async function returnWord(){
        
        let totalLetter = getRandomArbitrary(6, 10);
        let letter = LETTERS[getRandomArbitrary(0, LETTERS.length -1)];
        let words = list[totalLetter][letter];
        let index = getRandomArbitrary(0, words.length -1);
        let word = words[index];
        onClick(word);
    }


    
    return <button onClick={()=>returnWord()}>{text}</button>
        
}