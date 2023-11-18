import React from 'react'
import { TitleH1Props } from './titleH1'

export default function TitleH1({ children }: TitleH1Props) {
  return (
    <h1 className="text-center text-red-600 text-5xl font-bloody mb-5">{ children }</h1>
  )
}
