
import Letter from "./Letter"

type LetterBuilderReturn = (letter: string) => JSX.Element

export default function letterBuilder(word: string[], callback: (letter: string) => void): LetterBuilderReturn{

    return char => <Letter key={char} lettre={char} word={word} onClickLetter={callback} />
} 