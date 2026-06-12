import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MenuSection } from './components/MenuSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { WhyUsSection } from './components/WhyUsSection';
import { PartnershipSection } from './components/PartnershipSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <MenuSection />
        <HowItWorksSection />
        <WhyUsSection />
        <PartnershipSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
