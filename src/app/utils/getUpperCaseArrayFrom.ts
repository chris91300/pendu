//const { pipe, toUpper, split } = require("ramda");
import { pipe, toUpper, split } from 'ramda'

const getUpperCaseArrayFrom = pipe(toUpper, split(""))

export default getUpperCaseArrayFrom;