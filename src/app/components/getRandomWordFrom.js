import getRandomNumberBetween from '../utils/getRandomNumberBetween';
import LETTERS from '../letters';

export default function getRandomWordFrom(list) {
    const wordSize = getRandomNumberBetween(6, 10);
    const letter = LETTERS[getRandomNumberBetween(0, LETTERS.length -1)];
    const words = list[wordSize][letter];
    const index = getRandomNumberBetween(0, words.length -1);
    const word = words[index];
  return word
}
