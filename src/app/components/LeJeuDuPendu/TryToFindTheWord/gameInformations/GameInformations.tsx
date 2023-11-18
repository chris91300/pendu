import React from 'react'
import Container from '../../../globals/container/Container';
import Try from './try/Try';
import Result from './result/Result';
import { GameInformationsProps } from './gameInformations';



export default function GameInformations({ tries, wordHidden }: GameInformationsProps) {
  
  return (
    <Container className="flex flex-col grow items-center">
      <Try tries={tries}/>      
      <Result hiddenWord={wordHidden}/>
    </Container>
  )
}
