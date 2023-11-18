
export type cssLetterColor = "[wheat]" | "red" | "green"

export type useClickOnLetterReturn = {
    css: cssLetterColor,
    onClick: ()=>void,
    disabled: boolean
}

export type useClickOnLetterType = (letter: string, word: string[], onClickLetter: (letter: string) => void) => useClickOnLetterReturn