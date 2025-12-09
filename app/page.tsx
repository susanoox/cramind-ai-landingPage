import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { MemoryBarSpotlight } from "@/components/sections/memory-bar-spotlight";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
   return (
      <main className='min-h-screen'>
         <Navigation />
         <HeroSection />
         <FeaturesSection />
         <MemoryBarSpotlight />
         <HowItWorksSection />
         <BenefitsSection />
         <CTASection />
         <Footer />
      </main>
   );
}
