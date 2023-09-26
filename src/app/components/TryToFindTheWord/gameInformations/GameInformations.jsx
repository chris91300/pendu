import React from 'react'
import Container from '../../container/Container';
import Try from './Try';
import Result from './result';


function GameInformations({ tries, wordHidden }) {
  return (
    <Container className="block block_col block_grow">
      <Try tries={tries}/>      
      <Result hiddenWord={wordHidden}/>
    </Container>
  )
}

export default GameInformations