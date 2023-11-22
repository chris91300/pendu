import { ColorKeyType } from "../../keyboard";

export type useClickOnLetterReturn = {
    css: ColorKeyType;
    onClick: () => void;
    disabled: boolean;
};

export type useClickOnLetterType = (
    letter: string,
    word: string[],
    onClickLetter: (letter: string) => void
) => useClickOnLetterReturn;
