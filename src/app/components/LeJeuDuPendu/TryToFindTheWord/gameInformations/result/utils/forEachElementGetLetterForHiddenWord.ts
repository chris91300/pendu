import { map } from "ramda";
import getLetterForHiddenWord from './getLetterForHiddenWord'

const forEachElementGetLetterForHiddenWord = map(getLetterForHiddenWord)

export default forEachElementGetLetterForHiddenWord;