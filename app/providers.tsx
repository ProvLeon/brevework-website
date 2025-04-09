"use client";

import React from "react";
// Remove framer-motion and usePathname imports if no longer needed here
import { ThemeProvider } from '@/components/providers/ThemeProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  // No need for pathname or animation here anymore

  return (
    <ThemeProvider storageKey="brevework-theme" defaultTheme="system">
      {/* The wrapper div with theme transition classes can optionally stay if you
              want the whole background to transition colors smoothly, but the
              page-specific animation is removed. Alternatively, apply these
              classes to the body in layout.tsx or globals.css */}
      <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300 ease-in-out">
        {children}
      </div>
    </ThemeProvider>
  );
}
