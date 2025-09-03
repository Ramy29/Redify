'use client'

import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image'
import EmailDialog from './dialog'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Countdown from './count-down'
import Autoplay from "embla-carousel-autoplay"
import { items } from "@/lib/static/commming-book";

export default function CommingSoon() {
  return (
    <div className="container mx-auto flex flex-col items-center gap-10 py-10">
      {/* Main carousel */}
      <Carousel
        opts={{
          loop: true, // Enable infinite looping
        }}
        plugins={[
          Autoplay({
            delay: 3000, // Auto slide delay in ms
          }),
        ]}
        className="w-full flex justify-center"
      >
        <CarouselContent className="w-full">
          {items.map((product, index) => (
            <CarouselItem
              key={index}
              className="basis-full flex justify-center"
            >
              <div className="rounded-2xl shadow-xl flex flex-col md:flex-row items-center md:items-start gap-10 p-8 w-[700px] max-w-4xl">
                
                {/* Product Image */}
                <motion.div
                  initial={{ x: "200vh", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 80,
                    duration: 0.8,
                  }}
                  className="flex-shrink-0"
                >
                  <Image
                    src={product.img}
                    alt={product.title}
                    width={200}
                    height={250}
                    className="rounded-xl shadow-md"
                  />
                </motion.div>

                {/* Product Details */}
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col gap-6 text-gray-700"
                >
                  {/* Title, Exclusive Tag & Price */}
                  <div className="space-y-2">
                    <h1 className="font-bold text-3xl text-chart-3">
                      {product.title}
                    </h1>
                    {product.exclusive && (
                      <p className="text-red-600 font-light text-xs">
                        Exclusive!
                      </p>
                    )}
                    <h2 className="text-chart-1 font-semibold text-2xl">
                      {product.price}
                    </h2>
                  </div>

                  {/* Countdown Timer */}
                  <Countdown targetDate={product.launchDate} />

                  {/* Email Subscription Dialog */}
                  <EmailDialog />
                </motion.div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Carousel Navigation */}
        <CarouselPrevious className="left-8 md:left-14 lg:left-28" />
        <CarouselNext className="right-8 md:right-14 lg:right-28" />
      </Carousel>
    </div>
  )
}

