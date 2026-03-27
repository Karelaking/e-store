import { Container, NewArrivalsSection, TrendingSection } from "@/components/server";
import {CTASection} from "@/components/server";
import HeroSection from "@/components/server/HeroSection";

export default function Home() {
  return (
    <Container className="w-full min-h-max">
      <HeroSection />
      <TrendingSection />
      <NewArrivalsSection />
      <CTASection />
    </Container>
  );
}
