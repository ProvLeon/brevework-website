'use client'
import { BrainCircuit, Palette, MonitorSmartphone, Printer, MessageSquare } from 'lucide-react'; // Relevant icons
import { motion } from "framer-motion";


const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15 // Slightly more stagger
    }
  }
};

const servicesList = [
  { icon: BrainCircuit, title: "Brand Strategy & Consulting", description: "Market research, positioning, audience analysis, brand architecture, messaging frameworks, and strategic workshops to build a solid foundation." },
  { icon: Palette, title: "Visual Identity Design", description: "Logo design, color palettes, typography systems, brand guidelines, iconography, and visual language development for a cohesive look and feel." },
  { icon: MonitorSmartphone, title: "Website Design & Development", description: "User experience (UX) design, user interface (UI) design, responsive web development (using Next.js!), content management systems, and e-commerce solutions." },
  { icon: Printer, title: "Print & Marketing Materials", description: "Brochures, business cards, packaging design, presentations, signage, and other tangible brand assets designed for impact." },
  { icon: MessageSquare, title: "Brand Voice & Copywriting", description: "Developing a distinct tone of voice, crafting compelling brand narratives, website copy, taglines, and key marketing messages." },
];


export default function ServicesContent() {
  return (
    <>
      <motion.div
        className="max-w-2xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      >
        <h1 className="text-4xl font-bold tracking-tight mb-4">Our Services</h1>
        <p className="text-lg text-muted-foreground">
          We provide end-to-end branding solutions focused on clarity, impact, and strategic growth.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto"
        variants={staggerContainer}
        initial="initial"
        animate="animate" // Animate when the component mounts
      >
        {servicesList.map((service, index) => (
          <motion.div
            key={index}
            className="flex items-start space-x-4 p-6 border border-border/70 rounded-lg bg-background"
            variants={fadeInUp}
          >
            <service.icon className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
