"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Variants for subtle continuous animation
const subtlePulse = {
  initial: { opacity: 0.2 },
  animate: {
    opacity: [0.2, 0.4, 0.2], // Pulse opacity
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
  }
};

const subtleRotate = (duration = 40, delay = 0) => ({
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: { duration, repeat: Infinity, ease: "linear", delay }
  }
});

const subtleScale = (duration = 8, delay = 0) => ({
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.03, 1], // Gentle pulse scale
    transition: { duration, repeat: Infinity, ease: "easeInOut", delay }
  }
});


export default function HeroVisual() {
  // Get theme if needed for more complex color logic, but CSS variables handle basic cases
  // const { resolvedTheme } = useTheme();

  return (
    // Container for the visual elements
    <motion.div
      className="relative w-full h-full flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.4, 0, 0.2, 1] }} // Staggered appearance
    >
      {/* Layer 1: Large, slow rotating outline circles */}
      <motion.svg
        className="absolute w-[80%] h-[80%] text-border opacity-30 dark:opacity-20 text-primary dark:text-primary"
        viewBox="0 0 200 200"
        fill="none" xmlns="http://www.w3.org/2000/svg"
        variants={subtleRotate(60)} // Slowest rotation
        initial="initial"
        animate="animate"
      >
        <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1" />
        <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
      </motion.svg>

      {/* Layer 2: Medium, slightly faster rotating, pulsing circle */}
      <motion.svg
        className="absolute w-[50%] h-[50%] text-primary opacity-70 dark:opacity-70 dark:text-primary dark:stroke-primary"
        viewBox="0 0 100 100"
        fill="none" xmlns="http://www.w3.org/2000/svg"
        variants={subtleRotate(40, 0.5)} // Faster rotation, slight delay
        initial="initial"
        animate="animate"
      >
        <motion.circle
          cx="50" cy="50" r="45"
          stroke="currentColor"
          strokeWidth="1.5"
          variants={subtlePulse} // Add opacity pulse
          initial="initial"
          animate="animate"
        />
      </motion.svg>

      {/* Layer 3: Smallest, scaling element (non-rotating or very slow) */}
      <motion.svg
        className="absolute w-[25%] h-[25%] text-primary dark:text-primary dark:opacity-40 opacity-40"
        viewBox="0 0 50 50"
        fill="none" xmlns="http://www.w3.org/2000/svg"
        variants={subtleScale(10, 1)} // Scale animation
        initial="initial"
        animate="animate"
      >
        {/* Example: A simple cross or plus shape */}
        <line x1="25" y1="10" x2="25" y2="40" stroke="currentColor" strokeWidth="2" />
        <line x1="10" y1="25" x2="40" y2="25" stroke="currentColor" strokeWidth="2" />
      </motion.svg>

      {/* Optional: Subtle Blur Layer for Depth */}
      <div className="absolute inset-0 backdrop-blur-[1px]" aria-hidden="true"></div>

    </motion.div>
  );
}
