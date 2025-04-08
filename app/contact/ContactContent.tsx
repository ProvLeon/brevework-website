'use client'
import { Metadata } from "next";
import Button from "@/components/ui/Button";
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from "framer-motion";


export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Brevework to discuss your branding project.",
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ContactContent() {
  // Placeholder submit handler
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add actual form submission logic here (e.g., API call)
    alert("Form submitted (placeholder)!");
  };

  return (
    <>
      <motion.div
        className="max-w-xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      >
        <h1 className="text-4xl font-bold tracking-tight mb-4">Let&apos;s Connect</h1>
        <p className="text-lg text-muted-foreground">
          Have a project in mind or just want to learn more? We&apos;d love to hear from you. Reach out using the form below or through our contact details.
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-5 gap-10 lg:gap-16 max-w-5xl mx-auto"
        initial="initial"
        animate="animate"
        variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
      >
        {/* Contact Form */}
        <motion.div className="md:col-span-3 space-y-6" variants={fadeInUp}>
          {/* <h2 className="text-2xl font-semibold mb-6">Send us a message</h2> */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-muted-foreground">Name</label>
              <input type="text" id="name" name="name" required className="w-full px-3 py-2 border border-border rounded-md bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-200" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-muted-foreground">Email</label>
              <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-border rounded-md bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-200" placeholder="your@email.com" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1.5 text-muted-foreground">Subject (Optional)</label>
              <input type="text" id="subject" name="subject" className="w-full px-3 py-2 border border-border rounded-md bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-200" placeholder="Project Inquiry" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-muted-foreground">Message</label>
              <textarea id="message" name="message" rows={5} required className="w-full px-3 py-2 border border-border rounded-md bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-200" placeholder="Tell us about your project..."></textarea>
            </div>
            <Button type="submit" size="lg">Send Message</Button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div className="md:col-span-2 space-y-8" variants={fadeInUp}>
          {/* <h2 className="text-2xl font-semibold mb-6">Contact Details</h2> */}
          <div className="flex items-start space-x-3">
            <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-foreground">Email</h3>
              <a href="mailto:info@brevework.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">info@brevework.com</a>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-foreground">Phone</h3>
              <p className="text-muted-foreground text-sm">+233 (0) 244 444 444</p>
              {/* Example: <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors text-sm">+1 (234) 567-890</a> */}
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-foreground">Location</h3>
              <p className="text-muted-foreground text-sm">Ejisu, Kumasi<br />Krapa near Light House Chapel</p>
              <p className="text-xs text-muted-foreground/70 mt-1">(Meetings by appointment)</p>
            </div>
          </div>
          {/* Optional: Add business hours or social links here too */}
        </motion.div>
      </motion.div>
    </>
  );
}
