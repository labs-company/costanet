import './globals.css'

import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ButtonWhatsApp from '@/components/ButtonWhatsapp'
import { Analytics } from '@vercel/analytics/react'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const metadata: Metadata = {
  title: 'Costanet S.A.S',
  description: 'Test de velocidad | Costanet | Servicio wifi',
  keywords: [
    'internet',
    'fibra,optica',
    'costanet',
    'internet de fibra optica',
    'colombia',
    'intenert',
    'valledupar',
    'cesar',
    'servicios',
    'clientes',
    'costanetcolombia',
  ],
  robots: './robots.txt',
  icons: {
    icon: '/costanet.png',
  },

  authors: {
    name: 'costanet',
    url: 'www.costanetcolombia.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang='en' className='scroll-smooth'>
      <body className='relative'>
        <header className='fixed top-0 z-50 left-0 right-0 hidden'>
          <Navbar />
        </header>
        <main className='mt-14 hidden'>
          {children}
          <Analytics />
        </main>
        <ButtonWhatsApp />
        <Footer />
      </body>
    </html>
  )
}
