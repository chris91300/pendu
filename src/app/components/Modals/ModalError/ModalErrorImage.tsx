import React from 'react'
import Image from 'next/image';


type ModalErrorImageProps = {
  src: string,
  imageSide: number
}

function ModalErrorImage({ src, imageSide }: ModalErrorImageProps) {

  return (
    <Image className='mx-auto mb-3' src={ src } alt="dessin du pendu"  width={ imageSide } height={ imageSide } />
  )
}

export default ModalErrorImage