import { GameOverStatus } from "../GameOver/gameOver"

export type TryToFindTheWordProps = {
    wordToFind: string,
    isOver: (text: GameOverStatus) => void
}

