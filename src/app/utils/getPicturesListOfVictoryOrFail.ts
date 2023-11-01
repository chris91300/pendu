
import getRandomNumberBetween from './getRandomNumberBetween';
import imagesOfVictory from './imagesOfVictory'
import imagesOfFail from './imagesOfFail';




export default function getPicturesListOfVictoryOrFail(userWin: boolean): string{
    
    const pathImg = "/images/";
    const picturesList = userWin ? imagesOfVictory : imagesOfFail;    
    const number = getRandomNumberBetween(0, picturesList.length);
    const img = pathImg + picturesList[number];

    return img
}