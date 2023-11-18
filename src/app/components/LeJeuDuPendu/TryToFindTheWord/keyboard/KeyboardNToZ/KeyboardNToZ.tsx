import React, { ReactNode } from 'react'
import Container from '../../../../globals/container/Container'
import { KeyboardPartProps } from '../keyboard'

export default function KeyboardNToZ({ children }: KeyboardPartProps) {
  return (
    <Container
        className="flex flex-col md:flex-row md:flex-wrap md:w-[650px] lg:w-[850px]"
      >
        { children }
      </Container>
  )
}
