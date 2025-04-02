import { HeroSection } from "@/components/home/hero-section";
import { StatsSection } from "@/components/home/stats-section";
import { FeaturesSection } from "@/components/home/features-section";
import { LearningPathsSection } from "@/components/home/learning-paths-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { CTASection } from "@/components/home/cta-section";
import { ChallengesSection } from "@/components/home/challenges-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <LearningPathsSection />
      <ChallengesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
