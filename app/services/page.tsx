import Container from "@/components/ui/Container";
import { Metadata } from "next";
import ServicesContent from "./ServicesContent";


export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore the branding services offered by Brevework, from strategy to web design.",
};

export default function ServicesPage() {
  return (
    <Container className="py-20 md:py-28">
      <ServicesContent />
    </Container>
  );
}
