
import React, { useState } from 'react'

import replaceVoyelleWithAccent from '../utils/replace'
import getRandomWordFromExternalAPI from '../utils/getRandomWordFromExternalAPI'
import getRandomWordFromAPI from '../utils/getRandomWordFromAPI'
import pipeAsync from './pipeAsync'

//TODO: remplacer la fonction eplaceVoyelleWithAccent par replaceVoyelleWithAccent et la supprimer si tout est ok
export default function useGetRandomWord(fc) {
    const [ error, setError ] = useState(false)
    const [ loading, setLoading ] = useState(false)
    const startLoading = ()=>setLoading(true)
    const stopLoading = ()=>setLoading(false)

   const getWordFromExternalApi = pipeAsync(getRandomWordFromExternalAPI, replaceVoyelleWithAccent, fc, stopLoading)
   const getWordFromInternalApi = pipeAsync(getRandomWordFromAPI, replaceVoyelleWithAccent, fc, stopLoading)
    
    const getRandomWord = async () => {
        startLoading()
        
        try{

            await getWordFromExternalApi()

        }catch(err){
            
            try{
                
                await getWordFromInternalApi()
               
            }catch(err){

                setError(true)

            } 
            
        }
       
    }

    return [ getRandomWord, loading, error ]
}
