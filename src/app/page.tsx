import HeroSection from '@/components/HeroSection'
import EcosystemSection from '@/components/EcosystemSection'
import ResidentialSection from '@/components/ResidentialSection'
import EnterpriseSection from '@/components/EnterpriseSection'
import IntegrationSection from '@/components/IntegrationSection'
import PlaceholderSection from '@/components/PlaceholderSection'
import ContactSection from '@/components/ContactSection'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <EcosystemSection />
      <ResidentialSection />
      <EnterpriseSection />
      <IntegrationSection />
      <PlaceholderSection />
      <ContactSection />
      <Footer />
    </div>
  );
}