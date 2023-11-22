import { compose } from "ramda";
import forEachElementGetLetterForHiddenWord from "./forEachElementGetLetterForHiddenWord";
import splitString from "./splitString";

const getHiddenWordComponents = compose(
    forEachElementGetLetterForHiddenWord,
    splitString
);

export default getHiddenWordComponents;
