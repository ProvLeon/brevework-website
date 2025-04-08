"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/providers/ThemeProvider';
import Button from './Button';

export function ThemeToggle() {
  // Use resolvedTheme to know the actual current theme (light/dark)
  // Use theme to know the user's preference (light/dark/system) if needed, but for simple toggle, resolvedTheme is key
  const { resolvedTheme, setTheme } = useTheme();

  // Function to toggle between light and dark
  const toggleTheme = () => {
    // Directly set the opposite of the current resolved theme
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  // Determine the label for the next theme for accessibility
  const nextThemeLabel = resolvedTheme === 'dark' ? 'light' : 'dark';

  return (
    <Button
      variant="ghost" // Use ghost variant for subtle appearance
      size="icon"     // Use icon size
      onClick={toggleTheme}
      aria-label={`Switch to ${nextThemeLabel} mode`}
      // Add relative positioning and overflow hidden to contain the absolute positioned icons during transition
      className="relative w-10 h-10 overflow-hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        {/* We use the resolvedTheme as the key to trigger the animation */}
        <motion.span
          key={resolvedTheme} // Change key to trigger enter/exit
          initial={{ opacity: 0, scale: 0.6, rotate: resolvedTheme === 'dark' ? 90 : -90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.6, rotate: resolvedTheme === 'dark' ? -90 : 90 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          // Position absolutely to allow icons to swap in the same space
          className="absolute inset-0 flex items-center justify-center"
        >
          {resolvedTheme === 'dark' ? (
            <Sun className="h-5 w-5" /> // Show Sun icon when it's dark (to switch to light)
          ) : (
            <Moon className="h-5 w-5" /> // Show Moon icon when it's light (to switch to dark)
          )}
        </motion.span>
      </AnimatePresence>
    </Button>
  );
}
