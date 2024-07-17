import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'Task Board',
  description: 'Make your life easier with Task Board',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen antialiased p-10',
          inter.className,
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
