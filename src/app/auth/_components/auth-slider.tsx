'use client'

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Image from 'next/image'
import Autoplay from "embla-carousel-autoplay"

export default function AuthSlider() {
const autoplay = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }) 
  )
    
  return (
    <>
     <div>
       <Carousel 
        plugins={[autoplay.current]}
        opts={{
        loop: true,
      }}
       >
        <CarouselContent className='min-w-1/2 max-h-screen'>
          <CarouselItem>  <Image src='/images/authimage0.jpg' className='h-full' alt='Auth Image' width={700} height={100}/></CarouselItem>        
          <CarouselItem>  <Image src='/images/authimage1.jpg' className='h-full' alt='Auth Image' width={700} height={100}/></CarouselItem>
          <CarouselItem>  <Image src='/images/authimage2.jpg' className='h-full' alt='Auth Image' width={700} height={100}/></CarouselItem>
          <CarouselItem>  <Image src='/images/authimage3.jpg' className='h-full' alt='Auth Image' width={700} height={100}/></CarouselItem>
          <CarouselItem>  <Image src='/images/authimage4.jpg' className='h-full' alt='Auth Image' width={700} height={100}/></CarouselItem>
       </CarouselContent>
     </Carousel>
     </div>
    </>
  )
}
