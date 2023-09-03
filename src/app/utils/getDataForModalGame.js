import getRandomArbitrary from '../utils/getRandomArbitrary';

import "../../../public/images/victoire1.jpg";
import "../../../public/images/victoire2.jpg";
import "../../../public/images/victoire3.jpg";
import "../../../public/images/victoire4.jpg";
import "../../../public/images/victoire5.jpg";
import "../../../public/images/victoire6.jpg";
import "../../../public/images/victoire7.jpg";
import "../../../public/images/victoire8.jpg";
import "../../../public/images/victoire9.jpg";
import "../../../public/images/victoire10.jpg";

import "../../../public/images/pendu2.jpg";
import "../../../public/images/pendu3.jpg";
import "../../../public/images/pendu4.jpg";
import "../../../public/images/pendu5.jpg";
import "../../../public/images/pendu6.jpg";


const imagesV = ["victoire1.jpg", "victoire2.jpg", "victoire3.jpg", "victoire4.jpg", "victoire5.jpg", "victoire6.jpg", "victoire7.jpg", "victoire8.jpg", "victoire9.jpg", "victoire10.jpg"];

const imagesF = ["pendu2.jpg", "pendu3.jpg", "pendu4.jpg", "pendu5.jpg", "pendu6.jpg"];
const pathImg = "/images/";

const getDataForModalGame = (status) => {
    const picturesList = status === "victory"? imagesV : imagesF;
    const number = parseInt(getRandomArbitrary(0, picturesList.length));
    const img = pathImg + picturesList[number];
    const alt = status === "victory"? "image aléatoire symbolisant la victoire" : "image aléatoire symbolisant la défaite";
    const side = 100;

    return  {img, alt, side }
}


export default getDataForModalGame;