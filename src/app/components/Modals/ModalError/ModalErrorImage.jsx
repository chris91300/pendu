import React from 'react'
import Image from 'next/image';



function ModalErrorImage({ src, imageSide }) {

  return (
    <Image className='mx-auto mb-3' src={ src } alt="dessin du pendu"  width={ imageSide } height={ imageSide } />
  )
}

export default ModalErrorImage