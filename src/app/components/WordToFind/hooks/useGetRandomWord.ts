
import React, { useState } from 'react'

import replaceVoyelleWithAccent from '../utils/replace'
import getRandomWordFromExternalAPI from '../utils/getRandomWordFromExternalAPI'
import getRandomWordFromAPI from '../utils/getRandomWordFromAPI'

    
type GetRandomWordTypes = [
    () => void,
    boolean,
    boolean
]


export default function useGetRandomWord(fc: (word: string)=> void): GetRandomWordTypes {
    const [ error, setError ] = useState(false)
    const [ loading, setLoading ] = useState(false)
    const startLoading = ()=>setLoading(true)
    const stopLoading = ()=>setLoading(false)

   const getWordFromExternalApi = async () => {
        const word = await getRandomWordFromExternalAPI()
        const wordWithoutAccent = replaceVoyelleWithAccent(word)
        fc(wordWithoutAccent)
   }

   const getWordFromInternalApi = async ()=> {
    const word = await getRandomWordFromAPI()
    const wordWithoutAccent = replaceVoyelleWithAccent(word)
    fc(wordWithoutAccent)
   }
    
   
    const getRandomWord = () => {
        startLoading()
        
        try{
            
            getWordFromExternalApi()
            stopLoading()

        }catch(err){
            
            try{
                
                getWordFromInternalApi()
                stopLoading()
               
            }catch(err){
                setError(true)
            } 
            
        }
       
    }

    return [ getRandomWord, loading, error ]
}
