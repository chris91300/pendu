
export type InputProps = {
    label: string,
    type: string,
    name: string,
    word: string,
    onChange: (text: string) => void,
    onFocus: () => void,
    error: boolean
}