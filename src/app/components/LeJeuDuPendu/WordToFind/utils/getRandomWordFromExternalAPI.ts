import getRandomNumberBetween from "../../../../utils/getRandomNumberBetween";
import fetchApi from "./fetchApi";
import { apiExternalType } from "./apiData";

async function getRandomWordFromExternalAPI(): Promise<string> {
    const wordSize = getRandomNumberBetween(6, 10);
    const url = `https://trouve-mot.fr/api/size/${wordSize}`;
    const data = await fetchApi<apiExternalType>(url);
    const word = data[0].name;

    return word;
}

export default getRandomWordFromExternalAPI;
