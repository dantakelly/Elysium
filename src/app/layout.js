import Header from "../components/header"
import Footer from "../components/Footer/Footer"
import gloablcss from "../components/global.css"

import Head from "next/head"

export const metadata = {
  title: 'Elysium',
  description: 'Made by Danta Kelly',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header/>
      {children}
      <Footer/> 
      </body>
    </html>
  )
}
