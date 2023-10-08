
"use client"

import React from "react";
import GameInformations from './gameInformations/GameInformations'
import {Modal} from '../Modals/modal'; 
import Keyboard from './keyboard/Keyboard'
import Container from '../container/Container'
import useAbstractDataForTryToFindTheWord from "./useAbstractDataForTryToFindTheWord";


const TryToFindTheWord = ({ wordToFind, isOver }) => {

  const [
          tries,
          wordHidden,
          word,
          clickLetter,
          modalStatus,
          modalIsVisible,
          letter,
          totalLetter,
          hiddeModal
        ] = useAbstractDataForTryToFindTheWord(wordToFind, isOver)
        
        
  return (
    <Container className="flex items-center md:flex-col px-1 py-5 relative">
      <GameInformations tries={tries} wordHidden={wordHidden}/>      

      <Keyboard word={ word } clickOnLetter={ clickLetter } />

     { modalIsVisible && <Modal 
        status={modalStatus} 
        modalIsVisible={modalIsVisible} 
        letter={letter} 
        totalLetter={totalLetter}
        tries={tries}
        hiddeModal={hiddeModal} 
      />}
    </Container>
  )
    
}

export default  TryToFindTheWord

