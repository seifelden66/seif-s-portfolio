"use client"
import Navbar from '@/components/Navbar'
import './globals.css'
import 'animate.css/animate.min.css'; // Import the animate.css file
import { VT323 } from 'next/font/google'
import { AOSInit } from '../aos'
import Sidebar from '@/components/Sidebar'
import { Provider } from 'react-redux'
import store from '@/Redux/store'

const vt = VT323({
  weight: '400',
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <AOSInit />
        <body className={vt.className}>
          <Navbar />
          <Sidebar />
          <div className="">
            {children}
          </div>
        </body>
      </html>
    </Provider>
  )
}
