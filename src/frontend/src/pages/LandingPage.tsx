import HeroSection from '@/components/landing/sections/HeroSection';
import ProblemSection from '@/components/landing/sections/ProblemSection';
import SolutionSection from '@/components/landing/sections/SolutionSection';
import BenefitsSection from '@/components/landing/sections/BenefitsSection';
import HowItWorksSection from '@/components/landing/sections/HowItWorksSection';
import IngredientsSection from '@/components/landing/sections/IngredientsSection';
import TestimonialsSection from '@/components/landing/sections/TestimonialsSection';
import TrustSafetySection from '@/components/landing/sections/TrustSafetySection';
import StrongCTASection from '@/components/landing/sections/StrongCTASection';
import FAQSection from '@/components/landing/sections/FAQSection';
import FooterSection from '@/components/landing/sections/FooterSection';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <HowItWorksSection />
      <IngredientsSection />
      <TestimonialsSection />
      <TrustSafetySection />
      <StrongCTASection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}
