

import Head from 'next/head'
import React from 'react'
import Header from './components/layout/Header'

function RootLayout() {
  return (
    <html lang="fr">
        <Head 
        title="Jeu du pendu"
        description="le jeu du pendu revisité par MICHEL Christophe, développeur fullStack Nodejs/React."
        />
        <body>
            <Header />

        </body>
    </html>
  )
}

export default RootLayout