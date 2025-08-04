import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prisca Chien',
  description: 'Created by Prisca Chien',
  generator: 'priscachien.com',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
