import { Metadata } from "next";
import WorkContent from "./WorkContent";
import Container from "@/components/ui/Container";


export const metadata: Metadata = {
  title: "Our Work",
  description: "See examples of successful branding projects delivered by Brevework.",
};

export default function WorkPage() {
  return (
    <Container className="py-20 md:py-28">

      <WorkContent />
    </Container >
  );
}
