import { NavBar } from './components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mark Slorach | Software Developer'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={inter.className}>
      <NavBar />
      {children}
      </body>
    </html>
  )
};
