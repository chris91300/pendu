import Letter from "./Letter"

export default function letterBuilder(word, callback){
    return char => <Letter key={char} lettre={char} word={word} onClickLetter={callback} />
} 