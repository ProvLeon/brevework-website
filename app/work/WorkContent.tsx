'use client'
import { Metadata } from "next";
import Image from "next/image"; // Import Next Image
import { motion } from "framer-motion";
import { ArrowUpRight } from 'lucide-react'; // Icon for link indication


export const metadata: Metadata = {
  title: "Our Work",
  description: "See examples of successful branding projects delivered by Brevework.",
};

// Placeholder data - replace with real projects and images
const portfolioItems = [
  { id: 1, title: "Project Alpha", description: "Rebranding a tech startup.", imageUrl: "/images/work1.jpg", slug: "project-alpha", category: "Branding" },
  { id: 2, title: "Beta Solutions", description: "Website design for a consultancy.", imageUrl: "/images/work2.jpg", slug: "beta-solutions", category: "Web Design" },
  { id: 3, title: "Gamma Co.", description: "Full visual identity package.", imageUrl: "/images/work3.jpg", slug: "gamma-co", category: "Identity" },
  { id: 4, title: "Delta Ventures", description: "Minimalist logo design.", imageUrl: "/images/work1.jpg", slug: "delta-ventures", category: "Logo Design" },
  // Add more projects. Make sure images exist at these paths in /public
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function WorkContent() {
  return (
    <>
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      >
        <h1 className="text-4xl font-bold tracking-tight mb-4">Our Work</h1>
        <p className="text-lg text-muted-foreground">
          Explore how we&apos;ve helped businesses transform their brands through strategic design.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10" // Removed lg:grid-cols-3 for potentially larger previews
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {portfolioItems.map((item) => (
          <motion.div key={item.id} variants={fadeInUp}>
            {/* Use motion.a for link animations */}
            <motion.a
              href={`/work/${item.slug}`} // Use <a> for potential page transitions if slug page exists
              // Use Link component if you prefer client-side nav without full page reload
              // as={Link} href={`/work/${item.slug}`}
              className="group block border border-border/70 rounded-lg overflow-hidden bg-background transition-shadow duration-300 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none"
              whileHover="hover" // Define hover state name for variants
              initial="rest" // Define initial state name
            >
              {/* Image container with motion */}
              <motion.div
                className="aspect-[16/10] bg-muted-foreground/10 overflow-hidden relative" // Slightly taller aspect ratio
              >
                <Image
                  src={item.imageUrl} // Use Next Image
                  alt={`Preview image for ${item.title}`}
                  fill // Use fill to cover the container
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive image sizes
                  className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105" // Subtle scale on hover
                />
                {/* Optional: Subtle overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/10 dark:group-hover:bg-white/5 transition-colors duration-300"
                />
              </motion.div>
              {/* Text content */}
              <div className="p-5 lg:p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{item.title}</h3>
                  {/* Add category tag */}
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">{item.category}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                {/* Add subtle arrow indicator */}
                <div className="inline-flex items-center text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Project <ArrowUpRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
      {/* TODO: Create dynamic routes for /work/[slug] */}
      {/* TODO: Add actual images to /public/images/work/ */}
    </>
  );
}
