"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image"; // Keep for diagonal background if used
import { cn } from '@/lib/utils';
import HeroVisual from './HeroVisual'; // Import the visual component

// --- Animation Variants --- (Keep variants as defined before)
const staggerContainer = (staggerAmount = 0.1) => ({
  initial: {},
  animate: { transition: { staggerChildren: staggerAmount, delayChildren: 0.2 } }
});

const wordRevealVariant = {
  initial: { y: "100%" },
  animate: { y: "0%", transition: { duration: 0.7, ease: [0.4, 0, 0.1, 1] } },
};

const fadeInVariant = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// --- Component ---
export default function HeroSection() {
  const headlineWords = ["Crafting", "Memorable", "Brands"];

  return (
    <motion.section
      className="relative flex items-center h-[calc(100vh-4rem)] min-h-[650px] md:min-h-[750px] bg-background overflow-hidden"
      initial="initial"
      animate="animate"
      variants={staggerContainer()}
    >
      {/* ===== ADDED: Full Abstract Background Layer ===== */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }} // Slightly delayed fade-in
        aria-hidden="true"
      >
        {/* Soft, slow rotating gradient */}
        <motion.div
          className="absolute inset-[-30%] bg-[radial-gradient(ellipse_at_center,var(--color-border)_0%,transparent_55%)] opacity-30 dark:opacity-15" // Using border color for subtlety
          animate={{
            // scale: [1, 1.05, 1], // Removed scale for less distraction
            rotate: [0, -15, 0], // Slower, counter-rotation example
          }}
          transition={{
            duration: 35, // Longer duration
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
        {/* You could add another layer here if desired */}
      </motion.div>

      {/* Diagonal Dividing Element (Sits above background, below content) */}
      <div
        className="absolute inset-y-0 right-0 w-7/12 md:w-1/2 h-full z-[5] bg-gradient-to-bl from-border/10 via-border/5 to-transparent dark:from-border/20 dark:via-border/10 dark:to-transparent pointer-events-none" // Added z-[5]
        style={{
          clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)',
        }}
        aria-hidden="true"
      >
        {/* Optional: Blurred image inside diagonal */}
        {/* <Image ... /> */}
        <Image
          src="/images/work2.jpg"
          alt="Hero Diagonal Image"
          fill
          className="object-cover opacity-60 dark:opacity-60 "
        />
      </div>

      {/* Content Grid (Highest z-index) */}
      <Container className="relative z-10 h-full"> {/* Ensured z-10 */}
        <div className="grid md:grid-cols-2 gap-8 h-full items-center">

          {/* Left Column: Typography */}
          <div className="text-left py-10 md:py-0">
            {/* Animated Headline */}
            <div className="mb-6">
              {headlineWords.map((word, index) => (
                <div key={index} className="overflow-hidden inline-block align-bottom mr-2 md:mr-3 lg:mr-4">
                  <motion.h1
                    variants={wordRevealVariant}
                    className={cn(
                      "text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl !leading-none select-none",
                      word === "Memorable" ? "text-primary" : "text-foreground"
                    )}
                    style={{ display: 'inline-block' }}
                  >
                    {word}
                    {index === headlineWords.length - 1 && <span className="text-primary">.</span>}
                  </motion.h1>
                </div>
              ))}
            </div>

            {/* Paragraph */}
            <motion.p
              variants={fadeInVariant}
              className="max-w-md text-base text-muted-foreground md:text-lg mb-10 leading-relaxed"
            >
              A design-driven branding agency building sharp, impactful identities that resonate and endure. We focus on clarity and strategic impact.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeInVariant}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <Button asChild size="lg">
                <Link href="/work">View Our Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4 inline" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Visuals */}
          {/* Added z-10 to ensure it's above diagonal if they overlap */}
          <div className="relative h-full hidden md:flex items-center justify-center pointer-events-none z-10">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </motion.section>
  );
}
