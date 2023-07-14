
import './globals.css'
import { Teko } from 'next/font/google'
import Navigation from '@/Components/Navigation'

const teko = Teko({
  subsets: ['latin'],
  weight: '400'
})

import MenuProvider from '@/context/MenuProvider'

export const metadata = {
  title: 'Exolo',
  description: 'Your Crypto Gateway',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={teko.className}>
        <MenuProvider>
          <Navigation />
          {children}
        </MenuProvider>
      </body>
    </html>
  )
}
