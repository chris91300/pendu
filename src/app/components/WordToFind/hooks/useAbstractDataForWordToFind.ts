import {useState} from 'react';
import onlyLetters from '../../../utils/onlyLetters'
import notEmpty from '../../../utils/notEmpty'
import replaceVoyelleWithAccent from '../utils/replace'


//  IL FAUT ABSOLUEMENT METTRE UN RETOUR A LA FONCTION
type DataForWordToFindTypes = [
    string,
    boolean,
    (val: string) => void,
    () => void,
    () => void,
    (word: string) => void
    ]

function useAbstractDataForWordToFind(callbackFromParent: (word: string) => void): DataForWordToFindTypes {
    
    const [word, setWord] = useState("");
    const [error, setError] = useState(false);

    const handleChange = (val: string) => { setWord(val); }

    const onFocus = ()=>{ setError(false); }

    const handleClick = () => {
        
        if( notEmpty(word) )
        {
            if(onlyLetters(word))
            {
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

    return [ word, error, handleChange, onFocus, handleClick, getRandomWord ]
}

export default useAbstractDataForWordToFind