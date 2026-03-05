import Benefits from '@/components/Benefits';
import ContactSection from '@/components/ContactSection';
import ComparisonTable from '@/components/ComparisonTable';
import CTA from '@/components/CTA';
import CustomerExperience from '@/components/CustomerExperience';
import Features from '@/components/Features';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Navbar from '@/components/Navbar';
import NeuralJourney from '@/components/NeuralJourney';
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
        <NeuralJourney />
        <Benefits />
        <CustomerExperience />
        <ResultsSection />
        <ComparisonTable />
        <Features />
        <WhyAther />
        <TrustSection />
        <FAQSection />
        <CTA />
        <ContactSection />
      </main>
      <Footer />
    </SiteProvider>
  );
}
