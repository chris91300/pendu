const { pipe, toUpper, split } = require("ramda");


const getUpperCaseArrayFrom = pipe(toUpper, split(""))

export default getUpperCaseArrayFrom;