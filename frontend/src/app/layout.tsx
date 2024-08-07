import type { Metadata } from 'next'
import './globals.css'

import { Stars } from "@/components/Stars/Stars"
import { Title } from "@/components/Title/Title"
import { Menu } from "@/components/Menu/Menu"

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col items-center justify-between py-12 default:px-24 mobile:px-8">
        <div>
          <Stars />
          <Title />
          <Menu />
        </div>
        {children}
        </main>
      </body>
    </html>
  )
}
