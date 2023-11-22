import { ReactNode } from "react";

export type ColorKeyType = "red" | "green" | "[wheat]";

export type KeyboardProps = {
    word: string[];
    clickOnLetter: (letter: string) => void;
};

export type KeyboardPartProps = {
    children: ReactNode;
};

export type LetterProps = {
    lettre: string;
    word: string[];
    onClickLetter: (letter: string) => void;
};

export type LetterBuilderReturn = (letter: string) => JSX.Element;

export type LetterButtonProps = {
    color: ColorKeyType;
    onClick: () => void;
    disabled: boolean;
    children: ReactNode;
};
