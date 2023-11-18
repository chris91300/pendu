import { GameOverStatus } from "./GameOver/gameOver"

interface RefObject<T> {
    readonly current: T;
}

export type StatusType = GameOverStatus

export type DataForGameTypes = [
    RefObject<HTMLDivElement>,
    boolean,
    boolean,
    string,
    boolean,
    StatusType,
    (word: string) => void,
    (status: StatusType) => void,
    () => void
]