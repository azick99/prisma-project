import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Metadata } from 'next'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'Task Board',
  description: 'Make your life easier with Task Board',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen antialiased p-10',
          inter.className,
          inter.variable
        )}
      >
        <div className="w-[50vw] mx-auto">
          <header>
            <div className="flex gap-3 items-start">
              <Image src="./Logo.svg" alt="logo" width={45} height={45} />
              <div className="flex flex-col gap-5">
                <h1 className="text-title pt-1">My Task Board</h1>
                <span className="text-descrition">Tasks to keep organised</span>
              </div>
              <Image
                src="./Edit_duotone.svg"
                alt="logo"
                width={28}
                height={28}
                className="mt-1"
              />
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}
