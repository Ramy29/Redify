import { Facebook, Instagram, Linkedin, Phone, Twitter,Github } from 'lucide-react'
import React from 'react'

export default function TopNavbar() {
  return (
    <>
     <div className='w-screen rounded-b-lg bg-[#393280] h-14 flex justify-between items-center text-white'>
    {/* Phone */}
        <div className='flex mx-10 gap-1.5'>
            <h1 ><Phone /> </h1>
            <p>+201554472917</p>
        </div>

        {/* Social Media  */}
        <div className='flex items-center gap-5  mx-10'>
     <a href="https://www.facebook.com/share/14PmNP91Jsz/">   <p><Facebook /></p></a>
        <a href=" https://github.com/Ramy29">  <p><Github /> </p></a>
       <a href=" https://www.linkedin.com/in/ramy-esam-03845a226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <p><Linkedin /></p></a>
        <a href="https://www.instagram.com/ramy_e_14?igsh=MWR4ZWNzMjZja2owZw=="><p><Instagram /> </p></a>
        <a href="https://x.com/ramyesam701?t=ZYPqUxuGcEo9q12-Z2YqBg&s=08"> <p><Twitter /> </p></a>
        </div>
     </div>
    </>
  )
}
