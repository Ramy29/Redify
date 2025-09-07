'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

export default function AboutUs() {
  return (
    <>
      <div
        className="min-h-screen flex justify-center items-center p-6"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.97 0 0) 50%, oklch(0.65 0.22 36) 50%)",
        }}
      >
        {/* Card */}
        <div className="rounded-2xl shadow-2xl flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 p-6 sm:p-10 w-full max-w-6xl bg-white/5">
          {/* Offer */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 text-zinc-300 w-full md:w-1/2"
          >
            <div className="text-chart-3 space-y-2 text-center md:text-left">
              <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
                All books are 50% off now!
              </h1>
              <p className="font-light text-sm sm:text-base">
                Celebrating our journey with thousands of books sold, happy
                readers worldwide, and growing every day!
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col gap-1 uppercase items-center">
                <h1 className="text-chart-1 font-bold text-xl sm:text-2xl">
                  1,250
                </h1>
                <h1 className="text-black text-sm sm:text-base">Books Sold</h1>
              </div>

              <div className="flex flex-col gap-1 uppercase items-center">
                <h1 className="text-chart-1 font-bold text-xl sm:text-2xl">
                  850
                </h1>
                <h1 className="text-black text-sm sm:text-base">Customers</h1>
              </div>

              <div className="flex flex-col gap-1 uppercase items-center">
                <h1 className="text-chart-1 font-bold text-xl sm:text-2xl">
                  $45K
                </h1>
                <h1 className="text-black text-sm sm:text-base">Revenue</h1>
              </div>

              <div className="flex flex-col gap-1 uppercase items-center">
                <h1 className="text-chart-1 font-bold text-xl sm:text-2xl">
                  12
                </h1>
                <h1 className="text-black text-sm sm:text-base">Countries</h1>
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
              stiffness: 80,
              duration: 0.8,
            }}
            className="flex-shrink-0 w-full md:w-1/2 flex justify-center"
          >
            <Image
              src="/images/books.png"
              alt="About Us Image"
              width={500}
              height={250}
              className="rounded-xl w-full h-auto max-w-sm md:max-w-md lg:max-w-lg"
            />
          </motion.div>
        </div>
      </div>
    </>
  )
}


