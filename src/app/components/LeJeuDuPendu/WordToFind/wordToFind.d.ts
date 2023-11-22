export type WordToFindProps = {
    onValid: (word: string) => void;
};

export type WordToFindReturnTypes = {
    word: string;
    error: boolean;
    handleChange: (val: string) => void;
    onFocus: () => void;
    handleClick: () => void;
    getRandomWord: (word: string) => void;
};
