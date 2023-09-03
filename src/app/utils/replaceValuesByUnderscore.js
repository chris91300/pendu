import { replace } from "ramda"


const replaceValuesByUnderscore = replace(/^[A-Za-z]+$/g, "_");
export default replaceValuesByUnderscore;
