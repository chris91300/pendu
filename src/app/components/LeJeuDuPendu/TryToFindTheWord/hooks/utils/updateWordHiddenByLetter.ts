import { equals, update } from "ramda";

export default function updateWordHiddenByLetter(
    wordSplitted: string[],
    wordHiddenSplitted: string[],
    letter: string
) {
    let wordHidden = wordHiddenSplitted;
    let totalLetterFound = 0;

    wordSplitted.forEach((char: string, index: number) => {
        if (equals(char, letter)) {
            wordHidden = update(index, letter, wordHidden);
            totalLetterFound++;
        }
    });

    return { wordHidden, totalLetterFound };
}
