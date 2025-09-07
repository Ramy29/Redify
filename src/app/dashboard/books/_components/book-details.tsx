'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import {  IBook } from '@/lib/types/book-category'
import { toast } from 'sonner'
import { useAddBook } from '../../cart/hooks/cart-hook'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, 
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

interface AllBooksProps {
  bookDetails: IBook | null; 
}
export default function BookDetails({ bookDetails }:AllBooksProps) {
  const { mutate: addBook } = useAddBook();

  const handleAddToCart = () => {
    if (!bookDetails?._id) return;
    addBook(
      { book: bookDetails._id, quantity: 1 },
      {
        onSuccess: () => toast.success("Product added to cart successfully"),
        onError: () => toast.error("Failed to add product"),
      }
    );
  };
 
  if (!bookDetails) {
    return (
      <div className="container mx-auto h-full flex items-center justify-center py-24">
        <p className="text-red-500">Failed to load book details.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto h-full flex flex-col md:flex-row justify-center text-center lg:text-start items-center gap-8">
      
      {/* Book Image */}
      <motion.div
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 1, ease: "easeOut" }} 
        className="h-full"
      >
        <motion.div whileHover={{ scale: 1.05 }}>
          <Image
            src="/images/book2.png"
            alt="Book"
            className="w-full h-full object-cover"
            width={500} 
            height={400}
          />
        </motion.div>
      </motion.div>

      {/* Book Details */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-3"
      >
        <motion.h1 variants={item} className="font-semibold text-6xl text-chart-3">
          Featured book
        </motion.h1>
        <motion.div variants={item} className="w-24 h-1 bg-chart-1 mt-4"></motion.div>
        <motion.p variants={item} className="font-medium text-ring">
          {bookDetails.author ?? "Unknown author"}
        </motion.p>
        <motion.h1 variants={item} className="text-3xl font-semibold text-chart-3">
          Birds gonna be happy
        </motion.h1>
        <motion.p variants={item} className="text-ring font-light max-w-[450px]">
          This book provides readers with valuable insights, practical knowledge, inspiring ideas, and timeless wisdom that can improve thinking, growth, and creativity
        </motion.p>
        <motion.h1 variants={item} className="text-chart-1 font-bold text-xl">
          $ {bookDetails.price ?? 0}
        </motion.h1>
        <motion.div variants={item} whileTap={{ scale: 0.9 }}>
          <Button
            onClick={handleAddToCart}
            variant="ghost" className="w-48 mt-10"
          >
            Add To Cart
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
