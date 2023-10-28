import { pipe, map } from "ramda";
import splitAll from "./splitAll";
import replaceValuesByUnderscore from "./replaceValuesByUnderscore";
import pickUp from "./pickUp";

/**
 * create a new word from the word given with each letters replace by undescore
 * @param {string} word 
 * @returns the new word
 */
const replaceLettersByUnderscore = pipe(
    splitAll,
    map(replaceValuesByUnderscore),
    pickUp
)



export default replaceLettersByUnderscore;