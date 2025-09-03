"use client";

import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

export default function Footer() {
  // Container animation
  const container = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.6, ease: "easeOut" },
    },
  };

  // Item animation (fade in + slight move up)
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Floating effect for icons
  const floatTransition = {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const,
  };

  return (
    <motion.footer
      variants={container}
      initial="hidden"
      animate="visible"
      className="w-full bg-gradient-to-r from-chart-1 via-chart-3 to-chart-3 p-8 flex flex-col justify-center items-center text-center text-gray-200"
    >
      {/* Title */}
      <motion.h1
        variants={item}
        className="text-2xl font-bold tracking-wider mb-2"
      >
        Ramy Esam
      </motion.h1>
      <motion.h3 variants={item} className="text-sm mb-6 opacity-80">
        © 2025 All Rights Reserved
      </motion.h3>

      {/* Social Icons */}
      <motion.div className="flex gap-6 text-white text-xl">
        <motion.div
          variants={item}
          animate={{ y: [0, -6, 0] }}
          transition={floatTransition}
        >
          <a href="https://www.facebook.com/share/14PmNP91Jsz/">
            <Facebook className="cursor-pointer hover:scale-125 hover:text-pink-400 transition-transform duration-300" />
          </a>
        </motion.div>

        <motion.div
          variants={item}
          animate={{ y: [0, -6, 0] }}
          transition={floatTransition}
        >
          <a href="https://github.com/Ramy29">
            <Github className="cursor-pointer hover:scale-125 hover:text-gray-400 transition-transform duration-300" />
          </a>
        </motion.div>

        <motion.div
          variants={item}
          animate={{ y: [0, -6, 0] }}
          transition={floatTransition}
        >
          <a href="https://www.linkedin.com/in/ramy-esam-03845a226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <Linkedin className="cursor-pointer hover:scale-125 hover:text-blue-400 transition-transform duration-300" />
          </a>
        </motion.div>

        <motion.div
          variants={item}
          animate={{ y: [0, -6, 0] }}
          transition={floatTransition}
        >
          <a href="https://www.instagram.com/ramy_e_14?igsh=MWR4ZWNzMjZja2owZw==">
            <Instagram className="cursor-pointer hover:scale-125 hover:text-pink-600 transition-transform duration-300" />
          </a>
        </motion.div>

        <motion.div
          variants={item}
          animate={{ y: [0, -6, 0] }}
          transition={floatTransition}
        >
          <a href="https://x.com/ramyesam701?t=ZYPqUxuGcEo9q12-Z2YqBg&s=08">
            <Twitter className="cursor-pointer hover:scale-125 hover:text-sky-400 transition-transform duration-300" />
          </a>
        </motion.div>
      </motion.div>

      {/* Small Line */}
      <motion.div
        variants={item}
        className="w-16 h-1 bg-pink-600 mt-6 rounded-full"
      />
    </motion.footer>
  );
}

