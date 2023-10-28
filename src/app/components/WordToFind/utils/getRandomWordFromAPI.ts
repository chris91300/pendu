
import getRandomNumberBetween from '../../../utils/getRandomNumberBetween'
import fetchApi from './fetchApi'

async function getRandomWordFromAPI(): Promise<string> {
    
    const wordSize = getRandomNumberBetween(6, 10)
    const url = `/api/getWord/${wordSize}`
    const data = await fetchApi(url);
    const word = data.word
    
    return word;
}

export default getRandomWordFromAPI