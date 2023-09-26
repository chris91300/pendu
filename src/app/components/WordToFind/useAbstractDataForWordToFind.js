import {useState} from 'react';
import onlyLetters from '../../utils/onlyLetters'
import notEmpty from '../../utils/notEmpty'

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
                callbackFromParent(word);
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