import HeroSection from "@/components/home/HeroSection";
import AboutSnippetSection from "@/components/home/AboutSnippetSection";
import ServicesOverviewSection from "@/components/home/ServicesOverviewSection";
import CallToActionSection from "@/components/home/CallToActionSection";

// This remains a Server Component, rendering Client Components
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSnippetSection />
      <ServicesOverviewSection />
      <CallToActionSection />
      {/* Add other sections/components as needed */}
    </>
  );
}
