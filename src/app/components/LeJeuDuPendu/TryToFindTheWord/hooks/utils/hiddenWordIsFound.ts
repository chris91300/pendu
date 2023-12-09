import { includes } from "ramda";

export default function hiddenWordIsFound(wordHidden: string[]) {
    return includes("_", wordHidden);
}
