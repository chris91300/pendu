import Image from 'next/image'
import React from 'react'

function Logo() {
  
  return (
    <div className='relative overflow-hidden border-2 border-solid border-white rounded-full w-24 h-24'>
        <Image src="/images/le-pendu-title.png" alt="le logo. Dessin humouristique d'un pendu" layout='fill'/>
    </div>
  )
}

export default Logo