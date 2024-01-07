import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ImageUrl } from '@/constants/assets'
import { AppWrapper } from '@/context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Charles C. | Portfolio',
  description: 'Developer Portfolio - Charles Bon Chua: Full Stack Developer',
  openGraph: {
    title: 'Charles C. | Portfolio',
    description: 'Developer Portfolio - Charles Bon Chua: Full Stack Developer',
    images: [{
      url: ImageUrl.cover,
    }],
  },
  verification: {
    google: 'ewawsLX9_9TZyMFjdeqxxGSWXpYSk6vUaAgtwwqakFE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWrapper>
          {children}
        </AppWrapper>
      </body>
    </html>
  )
}
