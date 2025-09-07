'use client'

import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import { motion } from "framer-motion"

export default function terms () {
  return (
    <div className="relative w-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url("/images/authimage0.jpg")` }}>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center min-h-screen">
        
        {/* Image */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center md:justify-start mb-6 md:mb-0"
        >
          <Image src='/images/aboutus.png' alt='About-us image' width={500} height={400} />
        </motion.div>

        {/* Description */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 0.8 }}
          className="flex-1 text-secondary flex flex-col gap-5"
        >
          <h1 className="font-bold text-3xl mb-4 text-">Terms</h1>
          <div className="w-24 h-1 bg-pink-900"></div>
        <div className="font-medium text-sm md:text-base w-full md:w-96 space-y-2 text-white">
          <p >1-All orders must be paid at checkout. We accept major payment methods.</p>
          <p > 2-We deliver as quickly as possible, but times may vary by location.</p>
          <p>3-Your personal data is safe with us and wonnot be shared without consent</p>
          <p>4-All website content is protected and may not be reused without permission</p>
          </div>
          
          {/* Social Links */}
          <div className="mt-8 w-48 flex justify-between items-center cursor-pointer text-white">
           <a href="https://www.facebook.com/share/14PmNP91Jsz/"> <Facebook /></a>
          <a href=" https://github.com/Ramy29">  <Github /></a>
           <a href=" https://www.linkedin.com/in/ramy-esam-03845a226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <Linkedin /></a>
           <a href="https://www.instagram.com/ramy_e_14?igsh=MWR4ZWNzMjZja2owZw=="> <Instagram /></a>
         <a href="https://x.com/ramyesam701?t=ZYPqUxuGcEo9q12-Z2YqBg&s=08">   <Twitter /></a>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

