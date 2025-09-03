"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-chart-3 via-chart-1 to-chart-2">
      <div className="flex flex-col items-center gap-8">
        
        {/* Floating Cubes */}
        <div className="flex gap-3">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-6 h-6 rounded-lg bg-white shadow-lg"
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* App Name with Glow */}
        <motion.h1
          className="text-4xl font-extrabold text-white tracking-widest drop-shadow-lg"
          animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Redify
        </motion.h1>

        {/* Progress Bar */}
        <div className="w-56 h-2 bg-white/30 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-white"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    </div>
  );
}

