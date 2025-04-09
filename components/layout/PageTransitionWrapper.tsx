"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

export default function PageTransitionWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 10 }} // Example: subtle slide up
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }} // Example: subtle slide down
        transition={{ duration: 0.3, ease: "easeInOut" }}
      // This div wraps ONLY the page content {children} from layout.tsx
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
