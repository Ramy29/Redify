'use client'

import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import Autoplay from "embla-carousel-autoplay"
import Link from 'next/link'

const categories = [
  { src: '/images/hardware.jpg', title: 'Higher Education' },
  { src: '/images/music.jpg', title: 'Music' },
  { src: '/images/software.jpg', title: 'Software' },
  { src: '/images/management.jpg', title: 'Management' },
  { src: '/images/bible.jpg', title: 'Bible' },
  { src: '/images/hardware.jpg', title: 'Hardware' },
  { src: '/images/children.jpg', title: 'Children' },
]

export default function Categories() {
  return (
    <div className='w-full max-w-[1200px] container mx-auto flex flex-col gap-2.5 px-4'>
      <p className='font-bold text-chart-1 ml-2 sm:ml-10'>Categories</p>
      <h1 className='font-bold text-2xl sm:text-3xl text-chart-3'>
        Explore our Top Categories
      </h1>

      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className='mt-10'
      >
        <CarouselContent className='gap-2.5'>
          {categories.map((cat, idx) => (
            <CarouselItem key={idx} className='basis-1/2 sm:basis-1/3'>
              <div className='flex flex-col gap-2.5 text-center'>
                <Image
                  src={cat.src}
                  className='rounded-xl'
                  width={400}
                  height={200}
                  alt={`${cat.title} Image`}
                />
                <h1 className='font-semibold text-lg sm:text-2xl md:text-3xl text-chart-3'>
                  {cat.title}
                </h1>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* View More */}
      <div className='w-full flex justify-center mt-10'>
        <Link href='/dashboard/books'>
          <Button variant='ghost' className='w-40 py-5 my-5'>
            VIEW MORE <MoveRight />
          </Button>
        </Link>
      </div>
    </div>
  )
}
