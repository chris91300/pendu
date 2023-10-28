import { words_6 } from "./mots_6";
import { words_7 } from "./mots_7";
import { words_8 } from "./mots_8";
import { words_9 } from "./mots_9";

import { wordsListByAlphabet } from './listType'

type getListReturn = {
    [index: string]: wordsListByAlphabet,
    "6": wordsListByAlphabet,
    "7": wordsListByAlphabet,
    "8": wordsListByAlphabet,
    "9": wordsListByAlphabet,
}


export default function getListOfWords(): getListReturn{
    return {
        "6": words_6,
        "7": words_7,
        "8": words_8,
        "9": words_9
    }
}