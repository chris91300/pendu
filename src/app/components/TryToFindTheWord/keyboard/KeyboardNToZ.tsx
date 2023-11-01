import React, { ReactNode } from 'react'
import Container from '../../container/Container'

export default function KeyboardNToZ({ children }: {children: ReactNode}) {
  return (
    <Container
        className="flex flex-col md:flex-row md:flex-wrap md:w-[650px] lg:w-[850px]"
      >
        { children }
      </Container>
  )
}
