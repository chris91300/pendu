
import { isVictory } from './isVictory';
import getPicturesListOfVictoryOrFail from './getPicturesListOfVictoryOrFail'
import getAltTextPictureOfVictoryOrFail from './getAltTextPictureOfVictoryOrFail'

type DataForModalGame = {
    img: string,
    alt: string,
    side: number
}

const getDataForModalGame = (status:string): DataForModalGame => {
    
    const doesUserWin = isVictory(status)
    const img = getPicturesListOfVictoryOrFail(doesUserWin)
    const alt = getAltTextPictureOfVictoryOrFail(doesUserWin)
    const side = 100;

    return  {img, alt, side }
}


export default getDataForModalGame;