import Benefits from '@/components/Benefits';
import ContactSection from '@/components/ContactSection';
import CTA from '@/components/CTA';
import CustomerExperience from '@/components/CustomerExperience';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Navbar from '@/components/Navbar';
import ProblemSection from '@/components/ProblemSection';
import ResultsSection from '@/components/ResultsSection';
import SiteProvider from '@/components/SiteProvider';
import SolutionSection from '@/components/SolutionSection';
import TrustSection from '@/components/TrustSection';
import WhyAther from '@/components/WhyAther';

export default function HomePage() {
  return (
    <SiteProvider>
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <Benefits />
        <CustomerExperience />
        <ResultsSection />
        <Features />
        <WhyAther />
        <TrustSection />
        <CTA />
        <ContactSection />
      </main>
      <Footer />
    </SiteProvider>
  );
}