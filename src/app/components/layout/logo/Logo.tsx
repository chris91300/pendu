import Image from 'next/image'
import React from 'react'
import Container from '../../globals/container/Container'

export default function Logo() {  
  return (
    <Container className='relative overflow-hidden border-2 border-solid border-white rounded-full w-24 h-24'>
        <Image
          src="/images/le-pendu-title.png"
          alt="le logo. Dessin humouristique d'un pendu"
          fill={true}
        />
    </Container>
  )
}
