"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ThemeProvider } from '@/components/providers/ThemeProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <ThemeProvider storageKey="brevework-theme" defaultTheme="system">
      <AnimatePresence mode="wait">
        {/* This div receives the theme classes and transitions */}
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          // Ensure these classes are present for smooth visual theme change
          className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300 ease-in-out"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}
