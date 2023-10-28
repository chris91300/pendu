import React from 'react'
import GameWon from './GameWon';
import GameLost from './GameLost'
import Container from '../container/Container';
import ButtonCloseWindow from '../buttonCloseWindow/ButtonCloseWindow';
import Button from '../Button';


type GameOverPropsType = {
  status: "victory" | "fail",
  word: string,
  close: ()=>void
}

function GameOver({ status, word, close }: GameOverPropsType) {

    const content = status === 'victory' ? <GameWon word={word} /> : <GameLost word={word} />
    const bgColor = status === "victory" ? 'bg-green-500' : 'bg-red-400'
    const classNameMainContainer = `w-full h-full flex justify-center ${bgColor}`
    const classNameContainer = `relative flex flex-col justify-center items-center w-full p-3`;
    
  return (
    <Container className={classNameMainContainer}>
        <Container className={classNameContainer}>
          <ButtonCloseWindow onClick={close} />
            {content}
          <Button onClick={ close }>nouvelle partie</Button>
        </Container>
    </Container>
  )
}

export default GameOver