import getRandomNumberBetween from '../utils/getRandomNumberBetween';
import alphabet from '../utils/alphabet';
import { ListOfWord } from '../mots/listType'


export default function getRandomWordFrom(list: ListOfWord): string {
    const wordSize = getRandomNumberBetween(6, 10);
    const letter = alphabet[getRandomNumberBetween(0, alphabet.length -1)];
    const words = list[wordSize][letter];
    const index = getRandomNumberBetween(0, words.length -1);
    const word = words[index];
  return word
}
