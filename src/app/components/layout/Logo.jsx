import Image from 'next/image'
import React from 'react'

function Logo() {

    const style = {
        position: "relative",
        overflow: "hidden",
        border: "2px solid white",
        borderRadius: "50%",
        width: "100px",
        height: "100px",
    }
  return (
    <div className='logo__container' style={ style }>
        <Image src="/images/le-pendu-title.png" alt="le logo. Dessin humouristique d'un pendu" layout='fill'/>
    </div>
  )
}

export default Logo