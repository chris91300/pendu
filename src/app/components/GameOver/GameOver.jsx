import React from 'react'
import GameWon from './GameWon';
import GameLost from './GameLost'
import Container from '../container/Container';
import ButtonCloseWindow from '../buttonCloseWindow/ButtonCloseWindow';

function GameOver({ status, word, close }) {

    const content = status === 'victory' ? <GameWon word={word} /> : <GameLost word={word} />
    
  return (
    <Container className={"modal modal_"+status+" modal--" + status}>
        <Container className={"modal_container modal_container--big modal_container--" + status}>
          <ButtonCloseWindow onClick={close} />
            {content}
          <button onClick={()=> close()}>nouvelle partie</button>
        </Container>
    </Container>
  )
}

export default GameOver