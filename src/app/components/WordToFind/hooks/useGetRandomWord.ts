
import React, { useState } from 'react'

import replaceVoyelleWithAccent from '../utils/replace'
import getRandomWordFromExternalAPI from '../utils/getRandomWordFromExternalAPI'
import getRandomWordFromAPI from '../utils/getRandomWordFromAPI'
//import { pipe } from 'ramda/es/index'
import { pipe } from 'ramda'
    
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

    const formatWordAndsetIt = pipe(replaceVoyelleWithAccent, fc)

    const getWordFromExternalApi = async () => {
        const word = await getRandomWordFromExternalAPI()
        formatWordAndsetIt(word)
    }

    const getWordFromInternalApi = async ()=> {
        const word = await getRandomWordFromAPI()
        formatWordAndsetIt(word)
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
