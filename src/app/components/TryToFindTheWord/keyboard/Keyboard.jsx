import React from 'react'
import { map } from 'ramda';
import letterBuilder from './letterBuilder'
import alphabet from '../../../utils/alphabet';
import Container from '../../container/Container';

function Keyboard({ word, clickOnLetter }) {
  
    const getLetterComponent = letterBuilder(word, clickOnLetter)
    const Keys = map( getLetterComponent, alphabet )

  return (
    <Container className="block block_row block_row--wrap">
        { Keys }
    </Container>
  )
}

export default Keyboard