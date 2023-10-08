import './globals.css'
import type { Metadata } from 'next'
import Header from './components/layout/Header'



export const metadata: Metadata = {
  title: "Jeu du pendu",
  description: "le jeu du pendu revisité par MICHEL Christophe, développeur fullStack Nodejs/React."
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {

  return (
    <html lang="fr">
      <body className="font-sans bg-cimetery bg-no-repeat bg-center bg-cover">
        <Header />
        { children }
      </body>
    </html>
  )
} 
