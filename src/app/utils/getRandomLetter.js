import alphabet from './alphabet'
import getRandomNumberBetween from './getRandomNumberBetween'

export default function getRandomLetter() {
  const randomIndex = getRandomNumberBetween(0, alphabet.length)
  const letter = alphabet[randomIndex]
  return letter;
}
