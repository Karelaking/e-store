import { Container } from "@/components/server";
import HeroSection from "@/components/server/HeroSection";
import TrendingSection from "@/components/server/TrendingSection";

export default function Home() {
  return (
    <Container className="w-full">
      <HeroSection />
      <TrendingSection />
    </Container>
  );
}
