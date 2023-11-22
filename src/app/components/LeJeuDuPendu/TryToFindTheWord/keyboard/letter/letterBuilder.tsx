import Letter from "./Letter";
import { LetterBuilderReturn } from "../keyboard";

export default function letterBuilder(
    word: string[],
    callback: (letter: string) => void
): LetterBuilderReturn {
    return function LetterComponent(char) {
        return (
            <Letter
                key={char}
                lettre={char}
                word={word}
                onClickLetter={callback}
            />
        );
    };
}
