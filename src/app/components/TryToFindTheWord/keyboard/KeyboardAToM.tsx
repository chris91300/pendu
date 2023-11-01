import React, { ReactNode } from 'react'
import Container from '../../container/Container'

export default function KeyboardAToM({ children }: {children: ReactNode}) {
  return (
    <Container
        className="flex flex-col order-first md:order-none md:flex-row md:flex-wrap md:w-[650px] lg:w-[850px]"
      >
        { children }
      </Container>
  )
}
