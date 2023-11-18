
export type returnDataForWordToFind = {
    word: string,
    error: boolean,
    handleChange: (val: string) => void,
    onFocus: () => void,
    handleClick: () => void,
    getRandomWord: (word: string) => void
}