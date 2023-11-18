import {useState} from 'react';
import onlyLetters from '../../../../utils/onlyLetters'
import notEmpty from '../../../../utils/notEmpty'
import replaceVoyelleWithAccent from '../utils/replace'
import { returnDataForWordToFind } from './returnDataForWordToFind';




export default function useDataForWordToFind(callbackFromParent: (word: string) => void): returnDataForWordToFind {
    
    const [word, setWord] = useState("");
    const [error, setError] = useState(false);

    const handleChange = (val: string) => { setWord(val); }

    const onFocus = ()=>{ setError(false); }

    const handleClick = () => {        
        if( notEmpty(word) ){
            if(onlyLetters(word)){
                const wordWithoutAccent = replaceVoyelleWithAccent(word)
                callbackFromParent(wordWithoutAccent);
            }
            else {
                setError(true);
            }
        } 
    }

    
    const getRandomWord = (word: string)=>{
        callbackFromParent(word);
    }

    return { word, error, handleChange, onFocus, handleClick, getRandomWord }
}

