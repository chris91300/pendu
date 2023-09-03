import React from 'react'
import ModalVictory from './ModalVictory';
import ModalFail from './ModalFail'

function GameOver({ status, word, close }) {

    const content = status === 'victory' ? <ModalVictory word={word} /> : <ModalFail word={word} />
    
  return (
    <div className={"modal modal_"+status+" modal--" + status}>
        <div className={"modal_container modal_container--big modal_container--" + status}>
            <h2>{status === "victory"? "félicitations".toUpperCase() : "Vous avez été pendu".toUpperCase()}</h2>
            <p className="button_hide_modal" onClick={()=>close()}>X</p>
            {content}
            <button onClick={()=> close()}>nouvelle partie</button>
        </div>
    </div>
  )
}

export default GameOver