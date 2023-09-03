import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/layout/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Jeu du pendu",
  description: "le jeu du pendu revisité par MICHEL Christophe, développeur fullStack Nodejs/React."
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  const bgPictureNumber = 1;
  const backgroundImageUrl = `url('/images/background/cimetery_${bgPictureNumber}.jpg')`
  const bodyStyle = {
    color: "white",
    backgroundImage: backgroundImageUrl,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"
  }
  return (
    <html lang="fr">
      <body className={inter.className} style={ bodyStyle }>
        <Header />
        { children }
      </body>
    </html>
  )
}
