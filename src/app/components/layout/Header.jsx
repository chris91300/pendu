import Image from 'next/image'
import React from 'react'
import Logo from './Logo'
import Link from 'next/link'

function Header() {

  const headerStyle= {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    backgroundColor: "rgba(0,0,0,0.7)"
  }
  return (
    <header style={ headerStyle }>
        <Logo />
        <Link href="/">portfolio</Link>
    </header>
  )
}

export default Header