import Container from "@/components/ui/Container";
import { Metadata } from "next";
import AboutContent from "./AboutContent";

// Metadata export remains valid here in the Server Component
export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Brevework's mission, values, and the team behind the brands.",
};

// This page remains a Server Component
export default function AboutPage() {
  return (
    <Container className="py-20 md:py-28">
      {/* Render the client component which handles motion */}
      <AboutContent />
    </Container>
  );
}
