import {useState} from 'react';
import onlyLetters from '../../../utils/onlyLetters'
import notEmpty from '../../../utils/notEmpty'
import replaceVoyelleWithAccent from '../utils/replace'

function useAbstractDataForWordToFind(callbackFromParent) {
    const [word, setWord] = useState("");
    const [error, setError] = useState(false);

    const handleChange = (val) => { setWord(val); }

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

    
    const getRandomWord = (word)=>{
        callbackFromParent(word);
    }

    return [ word, error, handleChange, onFocus, handleClick, getRandomWord ]
}

export default useAbstractDataForWordToFind