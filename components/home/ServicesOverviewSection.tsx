"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Palette, MonitorSmartphone } from 'lucide-react';
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

// Reusable variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  },
  viewport: { once: true, amount: 0.2 }
};

// Stagger container variant
const staggerContainer = (staggerAmount = 0.1) => ({
  initial: {}, // Parent doesn't need initial state itself
  whileInView: { // Trigger when this container is in view
    transition: {
      staggerChildren: staggerAmount
    }
  },
  viewport: { once: true, amount: 0.15 } // Trigger stagger slightly earlier
});

// Variant for grid items (can be same as fadeInUp if desired)
const gridItemVariant = fadeInUp; // Let's reuse fadeInUp for simplicity

const services = [
  { icon: Zap, title: "Brand Strategy", description: "Defining your brand's position, voice, and messaging to connect effectively." },
  { icon: Palette, title: "Visual Identity", description: "Creating compelling logos, palettes, typography, and guidelines that capture your essence." },
  { icon: MonitorSmartphone, title: "Web & Digital", description: "Designing user-centric websites and digital experiences that elevate your brand." },
];

export default function ServicesOverviewSection() {
  return (
    // Section container
    <section className="py-24 md:py-32 bg-background">
      <Container>
        {/* Section Header - Animates independently */}
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={fadeInUp.viewport}
          variants={fadeInUp}
          className="max-w-xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">Our Expertise</h2>
          <p className="text-muted-foreground text-lg">
            From strategy to execution, we offer comprehensive branding solutions tailored to your goals.
          </p>
        </motion.div>

        {/* Staggering Container for the Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer(0.15)} // Apply stagger variant
          initial="initial"
          whileInView="whileInView" // Use whileInView state name
          viewport={staggerContainer().viewport} // Use viewport from stagger variant
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={gridItemVariant} // Each item uses the grid item variant
              className="group relative p-8 border border-border/70 rounded-lg bg-background overflow-hidden transition-all duration-300 hover:border-foreground/30 hover:shadow-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-foreground/0 to-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:via-foreground/5 dark:to-foreground/10"></div>
              <div className="relative z-10">
                <service.icon className="w-8 h-8 mb-5 text-primary" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Link Button - Animates independently */}
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={fadeInUp.viewport}
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <Button asChild variant="link" size="lg" icon={ArrowRight} iconPosition="right">
            <Link href="/services">Explore All Services</Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
