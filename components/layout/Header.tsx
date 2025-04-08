"use client"; // Needs state for mobile menu

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Import icons

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button"; // Import Button for potential use
import { usePathname } from "next/navigation"; // To close menu on navigation
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../ui/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

// Logo Component (Simple text for now, can be replaced with SVG)
const Logo = () => (
  <Link
    href="/"
    className="text-xl font-bold tracking-tight text-foreground hover:text-muted-foreground transition-colors duration-300 ease-in-out"
    aria-label="Brevework Home"
  >
    Brevework<span className="text-primary">.</span> {/* Subtle dot */}
  </Link>
);


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { type: "tween", ease: "easeInOut", duration: 0.3 } },
    exit: { opacity: 0, x: "100%", transition: { type: "tween", ease: "easeInOut", duration: 0.2 } },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05 + 0.1, ease: "easeOut" } // Stagger effect
    })
  };


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-md"> {/* Increased blur, slightly transparent border */}
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors duration-200 ease-in-out relative",
                pathname === link.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
                // Add subtle underline animation on hover/active
                "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300",
                pathname === link.href ? "after:w-full" : "hover:after:w-full"
              )}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/40 z-40 md:hidden"
                onClick={toggleMenu} // Close on backdrop click
              />
              {/* Menu Content */}
              <motion.div
                key="mobile-menu"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-background shadow-lg p-6 md:hidden flex flex-col"
              >
                <div className="flex justify-between items-center mb-8">
                  <ThemeToggle />
                  <Logo />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleMenu}
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link, i) => (
                    <motion.div key={link.href} custom={i} variants={navItemVariants}>
                      <Link
                        href={link.href}
                        className={cn(
                          "block text-lg font-medium py-2 transition-colors duration-200 ease-in-out",
                          pathname === link.href
                            ? "text-primary"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                        onClick={() => setIsOpen(false)} // Close on link click
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                <div className="mt-auto pt-6 border-t border-border">
                  {/* Optional: Add CTA or social links here */}
                  <Button asChild className="w-full" variant="outline">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
                  </Button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
};

export default Header;
