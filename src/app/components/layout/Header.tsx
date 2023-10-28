
import React from 'react'
import Logo from './Logo'
import Link from 'next/link'

function Header() {

 
  return (
    <header className='flex items-center justify-between p-5 bg-black bg-opacity-70'>
        <Logo />
        <Link className='font-bloody text-lg text-red-600' href="/">portfolio</Link>
    </header>
  )
}

export default Header