import getRandomNumberBetween from '../utils/getRandomNumberBetween';
import alphabet from '../utils/alphabet';

export default function getRandomWordFrom(list) {
    const wordSize = getRandomNumberBetween(6, 10);
    const letter = alphabet[getRandomNumberBetween(0, alphabet.length -1)];
    const words = list[wordSize][letter];
    const index = getRandomNumberBetween(0, words.length -1);
    const word = words[index];
  return word
}
