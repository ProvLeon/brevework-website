import Container from "@/components/ui/Container";
import ContactContent from "./ContactContent";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Brevework to discuss your branding project.",
};

export default function ContactPage() {
  return (
    <Container className="py-20 md:py-28">
      <ContactContent />
    </Container>
  );
}
