import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ExperienceSection from './components/ExperienceSection';
import FleetGrid from './components/FleetGrid';
import PerformanceSection from './components/PerformanceSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#111111] text-gray-100 min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <ExperienceSection />
        <FleetGrid />
        <PerformanceSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;