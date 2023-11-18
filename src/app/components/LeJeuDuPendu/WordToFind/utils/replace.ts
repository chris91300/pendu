import { replace, pipe } from 'ramda'

const replaceAWithAccentByA = replace(/[àầä]/, "a")
const replaceEWithAccentByE = replace(/[éèêë]/, "e")
const replaceIWithAccentByI = replace(/[îï]/, "i")
const replaceOWithAccentByO = replace(/[ôö]/, "o")
const replaceUWithAccentByU = replace(/[ûü]/, "u")
const replaceYWithAccentByY = replace(/[ŷÿ]/, "y")

const replaceVoyelleWithAccent = pipe(
    replaceAWithAccentByA,
    replaceEWithAccentByE,
    replaceIWithAccentByI,
    replaceOWithAccentByO,
    replaceUWithAccentByU,
    replaceYWithAccentByY
)

export default replaceVoyelleWithAccent;