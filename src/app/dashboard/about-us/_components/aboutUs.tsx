'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

export default function AboutUs() {
  return (
    <>
     <div className="min-h-screen flex justify-center items-center bg-gradient-to-r  p-6"
     style={{ background: "linear-gradient(135deg, oklch(0.97 0 0) 50%, oklch(0.65 0.22 36) 50%)" }}
     >
  {/* Card */}
  <div className=" rounded-2xl shadow-2xl  flex flex-col md:flex-row items-center md:items-start gap-10 p-10 w-full max-w-4xl">
  

    {/* Offer */}
    <motion.div
    initial={{ x: -100, opacity: 0 }} 
    animate={{ x: 0, opacity: 1 }} 
    transition={{ duration: 0.8 }}
    className="flex flex-col gap-6 text-zinc-300">
      <div className='text-chart-3 space-y-2'>
        <h1 className="font-bold text-3xl">All books are 50% off now!</h1>
      <p className="font-light ">
  Celebrating our journey with thousands of books sold, happy readers worldwide, and growing every day!
</p>
      </div>

     <div className="flex gap-8 text-lg">
  <div className="flex flex-col gap-2.5 uppercase items-center">
    <h1 className="text-chart-1 font-bold text-2xl">1,250</h1>
    <h1 className="text-black">Books Sold</h1>
  </div>

  <div className="flex flex-col gap-2.5 uppercase items-center">
    <h1 className="text-chart-1 font-bold text-2xl">850</h1>
    <h1 className="text-black">Customers</h1>
  </div>

  <div className="flex flex-col gap-2.5 uppercase items-center">
    <h1 className="text-chart-1 font-bold text-2xl">$45K</h1>
    <h1 className="text-black">Revenue</h1>
  </div>

  <div className="flex flex-col gap-2.5 uppercase items-center">
    <h1 className="text-chart-1 font-bold text-2xl">12</h1>
    <h1 className="text-black">Countries</h1>
  </div>
</div>

    </motion.div>

      
    {/* Image */}
    <motion.div
    initial={{ x: 200, opacity: 0 }} 
    animate={{ x: 0, opacity: 1 }} 
    transition={{
    ease: "easeOut",
     type: "spring",      
    stiffness:80,       
    duration: 0.8 }}
     className="flex-shrink-0">
      <Image
        src="/images/books.png"
        alt="About Us Image"
        width={500}
        height={250}
        className="rounded-xl"
      />
    </motion.div>
  </div>
     </div>

    </>
  )
}

