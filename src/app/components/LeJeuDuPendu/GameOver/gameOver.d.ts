export type GameOverStatus = "victory" | "fail";

export type GameOverPropsType = {
    status: GameOverStatus;
    word: string;
    close: () => void;
};
