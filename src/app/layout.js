import { Inter } from 'next/font/google'
import './globals.css'
import CookieNotice from './Components/ShareAbleComponent/CookieNotice'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tutor2u',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      
      <body className={inter.className} suppressHydrationWarning={true}>


        {children}

{/* <CookieNotice/> */}
      </body>
    </html>
  )
}
