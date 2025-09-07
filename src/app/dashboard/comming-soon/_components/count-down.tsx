"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Countdown({ targetDate }: { targetDate: string }) {
  // Calculate remaining time
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      Days: 0,
      Hours: 0,
      Minutes: 0,
      Seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Update every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate, calculateTimeLeft]);

  const formatTime = (num: number) => (num < 10 ? `0${num}` : num);

  return (
    <div className="grid grid-cols-4 gap-6 text-center">
      {Object.entries(timeLeft).map(([label, value], i) => (
        <motion.div
          key={i}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center rounded-2xl shadow-lg p-4 
          bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white"
        >
          <span className="text-3xl md:text-4xl font-extrabold drop-shadow-lg">
            {formatTime(value)}
          </span>
          <span className="text-sm md:text-base font-medium opacity-90">
            {label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

