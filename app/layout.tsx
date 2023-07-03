
import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '@/Components/Navigation'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <MenuProvider>
          <Navigation />
          {children}
        </MenuProvider>
      </body>
    </html>
  )
}
