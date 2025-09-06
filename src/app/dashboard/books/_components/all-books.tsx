"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { IBook } from "@/lib/types/book-category";
import { toast } from "sonner";
import { useAddBook } from "../../cart/hooks/cart-hook";

interface AllBooksProps {
  books: IBook[];
}

export default function AllBooks({ books }: AllBooksProps) {
  const { mutate: addBook, isPending } = useAddBook();

  return (
    <div className="w-screen flex px-4">
      {/* Books Section */}
      <div className="w-full max-w-[1200px] py-4 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto">
        {books.map((book, i) => (
          <motion.div
            key={book._id}
            className="relative w-72 h-[420px] mx-auto flex flex-col text-center bg-white shadow-lg rounded-2xl overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            {/* Badge */}
            <span className="absolute top-2 left-2 bg-gradient-to-r from-chart-1 to-chart-2 text-white text-xs font-bold px-2 py-1 rounded-lg shadow">
              New
            </span>

            {/* Image with overlay */}
            <div className="relative w-full h-3/4">
              <Image
                src="/images/book3.jpg"
                alt={book.title || "Book"}
                className="w-full h-full object-cover"
                width={300}
                height={400}
              />

              {/* Overlay with buttons */}
              <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/50 opacity-0 group-hover:opacity-100 transition">
                {/* Add Book */}
                <motion.button
                  onClick={() =>
                    addBook(
                      { book: book._id, quantity: 1 },
                      {
                        onSuccess: () =>
                          toast.success("Product added to cart successfully"),
                        onError: () => toast.error("Failed to add product"),
                      }
                    )
                  }
                  disabled={isPending}
                  className="bg-chart-1 text-white font-medium px-4 py-2 rounded-lg shadow hover:bg-chart-2 transition cursor-pointer disabled:opacity-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Add Book
                </motion.button>

                {/* View Details */}
                <Link href={`/dashboard/books/${book._id}`}>
                  <motion.button
                    className="bg-white text-chart-1 font-medium px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Book Details */}
            <div className="flex flex-col items-center gap-1 mt-3 px-3">
              <motion.h2
                className="font-semibold text-lg text-chart-3 line-clamp-1"
                whileHover={{ color: "#f97316" }}
              >
                {book.title}
              </motion.h2>
              <p className="font-light text-gray-600 line-clamp-2 text-sm">
                {book.description}
              </p>
              <h1 className="font-bold text-xl bg-gradient-to-r from-chart-1 to-chart-2 text-transparent bg-clip-text">
                $ {book.price}
              </h1>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}





