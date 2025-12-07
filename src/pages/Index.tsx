import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import IntroSection from "@/components/landing/IntroSection";
import PainPointsSection from "@/components/landing/PainPointsSection";
import FailedAttemptsSection from "@/components/landing/FailedAttemptsSection";
import DiscoverySection from "@/components/landing/DiscoverySection";
import SolutionSection from "@/components/landing/SolutionSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import KnowledgeGapSection from "@/components/landing/KnowledgeGapSection";
import WhatYouGetSection from "@/components/landing/WhatYouGetSection";
import BeforeAfterSection from "@/components/landing/BeforeAfterSection";
import ModulesSection from "@/components/landing/ModulesSection";
import PricingSection from "@/components/landing/PricingSection";
import FooterSection from "@/components/landing/FooterSection";

const Index = () => {
  return (
    <main className="font-body pt-20">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <PainPointsSection />
      <FailedAttemptsSection />
      <DiscoverySection />
      <SolutionSection />
      <TestimonialsSection />
      <KnowledgeGapSection />
      <WhatYouGetSection />
      <BeforeAfterSection />
      <ModulesSection />
      <PricingSection />
      <FooterSection />
    </main>
  );
};

export default Index;
