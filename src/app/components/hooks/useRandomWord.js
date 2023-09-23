import { useState, useEffect, useCallback } from 'react'

function useRandomWord() {
    const [list, setList ] = useState({});
    const [ loading, setLoading ] = useState(false)

    const asyncGetLIstOfWords = useCallback(async () => {
        const response = await fetch("/api/getWordList");
        if( !response.ok  ){
            console.log("ERREUR DATA")
    
        }
        const data = await response.json();
        setList(data);
        setLoading(true)
        
    }, []);

    useEffect(()=>{
        asyncGetLIstOfWords();
    
    }, [asyncGetLIstOfWords])

    return [ list, loading ]
}

export default useRandomWord