'use client'
import { Inter } from 'next/font/google'
import AuthContextProvider from '@/templates/AuthContextProvider'
import Header from '@/templates/Header'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <Header />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  )
}
