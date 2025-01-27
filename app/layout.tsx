import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Geoffry Accounting',
  description: 'Website for an accounting firm. We deliver exceprional results',
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
