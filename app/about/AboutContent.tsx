'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Eye, Users, Zap } from 'lucide-react';

// Simplified Animation Variant - Applied to individual blocks/sections
const fadeInUpInView = {
  initial: { opacity: 0, y: 30 },
  whileInView: { // Use whileInView as the trigger
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  },
  viewport: { once: true, amount: 0.2 } // Trigger when 20% is visible
};

// Stagger specifically for the grid container
const staggerGridContainer = {
  initial: {}, // No initial state needed for the container itself
  whileInView: { // Trigger staggering when the grid container is in view
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true, amount: 0.15 } // Trigger slightly earlier for the grid
};

// Variant for the items within the staggered grid
const gridItemVariant = {
  initial: { opacity: 0, y: 20 },
  whileInView: { // Use the whileInView state from the parent stagger
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
  // Note: Viewport settings are inherited from the parent stagger container here
};


export default function AboutContent() {
  return (
    <>
      {/* Page Header - Uses simple initial load animation */}
      <motion.div
        className="mb-16 md:mb-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }}
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-4">
          About Brevework
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
          Crafting clarity and impact through strategic brand design.
        </p>
      </motion.div>

      {/* Section 1: Philosophy & Image - Animate children independently */}
      <section className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-20 md:mb-28">
        {/* Text Column */}
        <motion.div
          // variants={fadeInUpInView} // Apply self-contained whileInView variant
          initial="initial"
          whileInView="whileInView"
          viewport={fadeInUpInView.viewport}
        >
          <h2 className="text-3xl font-semibold tracking-tight mb-5">Our Philosophy</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              We believe brand building is an act of reduction – stripping away the noise to reveal the essential truth. Simplicity isn&apos;t just an aesthetic; it&apos;s a strategy for clarity and connection.
            </p>
            <p>
              Our process is deeply collaborative. We partner closely with you to understand your vision, values, and audience, translating insights into a focused brand identity that resonates and endures. We prioritize impactful contrast and meaningful communication over fleeting trends.
            </p>
          </div>
        </motion.div>

        {/* Image Column */}
        <motion.div
          // variants={fadeInUpInView} // Apply self-contained whileInView variant
          initial="initial"
          whileInView="whileInView"
          viewport={fadeInUpInView.viewport}
          className="relative aspect-square rounded-lg overflow-hidden shadow-sm bg-border"
        >
          <Image
            src="/images/team1.jpg" // Ensure this image exists
            alt="Brevework's collaborative philosophy visualized"
            fill
            sizes="(max-width: 768px) 90vw, 45vw"
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent dark:from-white/5 dark:to-transparent"></div>
        </motion.div>
      </section>

      {/* Section 2: Our Values - Animate children within a staggering container */}
      <section className="mb-20 md:mb-28">
        {/* Header for Values - Animates independently */}
        <motion.div
          className="max-w-xl mx-auto text-center mb-12 md:mb-16"
          variants={fadeInUpInView}
          initial="initial"
          whileInView="whileInView"
          viewport={fadeInUpInView.viewport}
        >
          <h2 className="text-3xl font-semibold tracking-tight mb-4">Core Values</h2>
          <p className="text-muted-foreground text-lg">
            The principles guiding our work and partnerships.
          </p>
        </motion.div>

        {/* Staggering Grid Container */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerGridContainer} // Apply stagger variant here
          initial="initial"
          whileInView="whileInView" // Use the target state from stagger variant
          viewport={staggerGridContainer.viewport} // Use viewport from stagger variant
        >
          {/* Value Item */}
          <motion.div variants={gridItemVariant} className="text-center px-4">
            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10 dark:bg-primary/20 text-primary">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Clarity</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Prioritizing essential communication and strategic focus.</p>
          </motion.div>
          {/* Value Item */}
          <motion.div variants={gridItemVariant} className="text-center px-4">
            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10 dark:bg-primary/20 text-primary">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Intentional Design</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Every element serves a purpose, contributing to the whole.</p>
          </motion.div>
          {/* Value Item */}
          <motion.div variants={gridItemVariant} className="text-center px-4">
            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10 dark:bg-primary/20 text-primary">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Building strong brands together through open partnership.</p>
          </motion.div>
          {/* Value Item */}
          <motion.div variants={gridItemVariant} className="text-center px-4">
            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10 dark:bg-primary/20 text-primary">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Lasting Impact</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Creating brands that endure and drive meaningful results.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Section 3: Our Approach - Animate children independently */}
      <section className="max-w-3xl mx-auto">
        {/* Approach Header - Animates independently */}
        <motion.div
          className="text-center mb-6"
          variants={fadeInUpInView}
          initial="initial"
          whileInView="whileInView"
          viewport={fadeInUpInView.viewport}
        >
          <h2 className="text-3xl font-semibold tracking-tight">Our Approach</h2>
        </motion.div>

        {/* Prose Content - Animates independently */}
        <motion.div
          className="prose prose-lg lg:prose-xl dark:prose-invert max-w-none mx-auto text-foreground prose-headings:text-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80"
          variants={fadeInUpInView} // Use the same simple fade up
          initial="initial"
          whileInView="whileInView"
          viewport={fadeInUpInView.viewport} // Slightly later trigger maybe? amount: 0.3
        >
          <p>
            Founded on the principle that strong branding is the cornerstone of business success, we partner with clients of all sizes, from innovative startups to established enterprises. We utilize a focused approach, stripping away the unnecessary to reveal the essential brand story.
          </p>
          <p>
            Our services encompass strategy, visual identity, digital presence, and beyond. We begin with deep listening and research, move through collaborative strategy and design phases, and culminate in meticulously crafted brand assets and guidelines – always aiming for clarity, coherence, and impact.
          </p>
        </motion.div>
      </section>
    </>
  );
}
