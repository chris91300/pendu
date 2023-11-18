
interface RefObject<T> {
    readonly current: T;
}


export type DataForGameReturnTypes = {
    mainContainer: RefObject<HTMLDivElement>,
    gameIsStarted: boolean,
    wordIsValid: boolean,
    word: string,
    gameIsFinished: boolean,
    gameOverStatus: StatusType,
    validWord: (word: string) => void,
    isOver: (status: StatusType) => void,
    resetGame: () => void
}