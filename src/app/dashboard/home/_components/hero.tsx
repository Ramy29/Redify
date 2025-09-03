"use client";

import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <motion.div
      className="container mx-auto my-6 flex flex-col lg:flex-row items-center justify-between gap-10 px-5 rounded-xl"
      style={{
        background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Description */}
      <motion.div
        className="flex flex-col gap-4 max-w-lg text-center lg:text-left py-10 text-white"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <motion.h1
          className="font-bold text-3xl lg:text-5xl leading-snug drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Discover Stories That Stay With You
        </motion.h1>

        <motion.p
          className="font-semibold text-sm lg:text-base opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          From timeless classics to modern bestsellers, our collection brings
          you the worlds, ideas, and emotions that spark your imagination.
          Whether you’re chasing adventure, romance, or wisdom — the next page
          could change everything.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
        <Link href ='/dashboard/comming-soon'>  <Button
            variant="ghost"
            className="w-48 mx-auto lg:mx-0 my-5 py-5 border border-chart-3 flex items-center gap-2"
          >
            READ MORE <MoveRight />
          </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Image */}
      <motion.div
        className="flex justify-center lg:justify-end max-w-[700px]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -10, 0], // floating effect
        }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <Image
          src="/images/heroimage.png"
          alt="Hero Image"
          width={700}
          height={500}
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </motion.div>
    </motion.div>
  );
}

