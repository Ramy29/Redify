
import React from 'react'
import AuthSlider from './_components/auth-slider'
import {  Raleway } from 'next/font/google';

const greatVibes = Raleway({
  subsets: ["latin"],
  weight: ["400"],
});

export default function layout({children}) {
  return (
    <div className='flex'>
      <div className='hidden lg:inline max-w-1/2 max-h-screen'>
      <AuthSlider/>
      </div>
      <div>
        <body className={`${greatVibes.className} `}>
          
    
        {children}
            </body>
        </div>
    </div>
  )
}
