"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

// Reusable variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { // Renamed target state to whileInView for clarity
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  },
  viewport: { once: true, amount: 0.3 } // Trigger when 30% is visible
};

const staggerContainer = (staggerAmount = 0.15) => ({
  initial: {},
  whileInView: { // Renamed target state
    transition: {
      staggerChildren: staggerAmount
    }
  },
  viewport: { once: true, amount: 0.2 } // Trigger stagger when 20% is visible
});

export default function CallToActionSection() {
  return (
    // Section container - minimal motion, mostly for background
    <motion.section
      className="py-24 md:py-32 bg-primary text-primary-foreground"
      initial={{ opacity: 0 }} // Simple fade-in for the background color block
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        {/* Staggering Container for the Content */}
        <motion.div
          className="text-center"
          variants={staggerContainer()}
          initial="initial"
          whileInView="whileInView" // Use the target state name from variant
          viewport={staggerContainer().viewport} // Use viewport settings from variant
        >
          <motion.h2 variants={fadeInUp} className="text-3xl lg:text-4xl font-bold tracking-tight mb-5">Ready to build your brand?</motion.h2>
          <motion.p variants={fadeInUp} className="max-w-lg mx-auto mb-10 opacity-90 leading-relaxed">
            Let&apos;s discuss how Brevework can help you achieve your branding goals and stand out in the marketplace with clarity and impact.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button
              // Explicitly define contrast styles for secondary variant on primary background
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 dark:bg-background dark:text-foreground dark:hover:bg-background/90"
              size="lg"
              asChild
            >
              <Link href="/contact">Start a Project</Link>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </motion.section>
  );
}
