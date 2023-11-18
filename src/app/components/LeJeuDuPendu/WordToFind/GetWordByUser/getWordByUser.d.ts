export type GetWordByUserProps = {
    word: string,
    handleChange: (val: string) => void,
    onFocus: () => void,
    handleClick: () => void,
    error: boolean
}