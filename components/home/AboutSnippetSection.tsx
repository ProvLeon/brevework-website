"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";

// Reusable animation variant
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { // Trigger animation when the element itself is in view
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  },
  viewport: { once: true, amount: 0.2 } // Adjust amount as needed
};

export default function AboutSnippetSection() {
  return (
    // Section acts as a container, no complex variants needed here
    <section className="py-24 md:py-32 bg-background overflow-hidden">
      <Container className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text content - applies fadeInUp when THIS div is in view */}
        <motion.div
          initial="initial" // Uses initial from fadeInUp
          whileInView="whileInView" // Uses whileInView from fadeInUp
          viewport={fadeInUp.viewport} // Uses viewport from fadeInUp
          variants={fadeInUp} // References the variant object
        >
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-5">Unique Identities, Lasting Impact.</h2>
          <p className="text-muted-foreground mb-8 text-base md:text-lg leading-relaxed">
            At Brevework, we believe a strong brand is more than just a logo. It&apos;s the core story that connects you with your audience. Our experienced team collaborates closely with you to uncover that story and translate it into a powerful visual identity and strategic message.
          </p>
          <Button asChild variant="default" icon={ArrowRight} iconPosition="right">
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </motion.div>

        {/* Visual Element - applies fadeInUp when THIS div is in view */}
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={fadeInUp.viewport} // Use same viewport trigger settings
          variants={fadeInUp}
          className="relative aspect-video rounded-lg overflow-hidden bg-border/70 shadow-inner"
        >
          <Image
            src="/images/team1.jpg" // Ensure this image exists in /public/images
            alt="Brevework team collaborating on a project" // More specific alt text
            fill
            sizes="(max-width: 768px) 90vw, 45vw"
            className="object-cover"
            priority={false} // Can set priority false for images below the fold
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent dark:from-black/10"></div>
        </motion.div>
      </Container>
    </section>
  );
}
