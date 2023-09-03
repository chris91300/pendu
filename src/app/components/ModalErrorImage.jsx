import React from 'react'
import Image from 'next/image';



function ModalErrorImage({ src, imageSide }) {

   
    


  return (
    <Image src={ src } alt="dessin du pendu"  width={ imageSide } height={ imageSide } />
  )
}

export default ModalErrorImage