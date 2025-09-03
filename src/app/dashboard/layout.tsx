import React from 'react'
import TopNavbar from '@/app/dashboard/_components/TopNavbar'
import Navbar from '@/app/dashboard/_components/MainNavbar'
import Footer from '@/app/dashboard/_components/footer'


type PropsInterface = {
  children : React.ReactNode
}


export default async function Layout({ children } :PropsInterface ) {

return (
  <div className="overflow-hidden flex flex-col min-h-screen">
    <TopNavbar />
    <Navbar />

    <main className="flex-grow">
      {children}
    </main>

    <Footer />
  </div>
);
}

