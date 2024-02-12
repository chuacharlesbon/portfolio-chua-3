import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ImageUrl } from '@/constants/assets'
import { AppWrapper } from '@/context'
import Script from 'next/script'

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
      <Script
        id="gtag-root-1"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-8EG7WTTNQT`}
      />
      <Script
        id="gtag-about-2"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-8EG7WTTNQT', {
                page_path: window.location.pathname,
                });`,
        }}
      />
      <body className={inter.className}>
        <AppWrapper>
          {children}
        </AppWrapper>
      </body>
    </html>
  )
}
