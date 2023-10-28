import React from 'react'
import Container from '../../container/Container';
import Try from './Try';
import Result from './result';


type GameInformationsProps = {
  tries: number,
  wordHidden: string
}

function GameInformations({ tries, wordHidden }: GameInformationsProps) {
  
  return (
    <Container className="flex flex-col grow items-center">
      <Try tries={tries}/>      
      <Result hiddenWord={wordHidden}/>
    </Container>
  )
}

export default GameInformations