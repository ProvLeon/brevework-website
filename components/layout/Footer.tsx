import React from "react";

import { Github, Linkedin, Twitter, Dribbble } from 'lucide-react'; // Example Icons
import Container from "@/components/ui/Container";

// Example social links - replace with Brevework's actual links
const socialLinks = [
  { href: "#", label: "LinkedIn", icon: Linkedin },
  { href: "#", label: "Twitter", icon: Twitter },
  { href: "#", label: "Dribbble", icon: Dribbble },
  { href: "#", label: "GitHub", icon: Github },
];


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 mt-auto bg-background"> {/* Match header style */}
      <Container className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          &copy; {currentYear} Brevework. Minimalist Branding. Maximum Impact.
        </p>
        <div className="flex space-x-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Brevework on ${link.label}`}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 ease-in-out"
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
        {/* Optional: Add minimal links like Privacy Policy */}
        {/* <div className="text-sm text-muted-foreground space-x-4 mt-4 md:mt-0">
                 <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
                 <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
             </div> */}
      </Container>
    </footer>
  );
};

export default Footer;
