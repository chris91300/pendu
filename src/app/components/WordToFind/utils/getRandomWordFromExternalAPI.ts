
import getRandomNumberBetween from '../../../utils/getRandomNumberBetween'
import fetchApi from './fetchApi'

/**
 *  a faire
 * factoriser pour avoir n fetch identique avec la fonction fromAPI
 * pour pouvoir récupérer et renvoyer uniqument ce que l'on veut
 */
async function getRandomWordFromExternalAPI():Promise<string> {
    
    const wordSize = getRandomNumberBetween(6, 10)
    const url = `https://trouve-mot.fr/api/size/${wordSize}`
    const data = await fetchApi(url);
    const word = data[0].name

    return word
}

export default getRandomWordFromExternalAPI