import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AcademicGrid } from './components/AcademicGrid';
import { TechCreative } from './components/TechCreative';
import { Interests } from './components/Interests';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-primary selection:bg-accent selection:text-white overflow-x-hidden">
      <Header />
      <main className="flex flex-col gap-0">
        <Hero />
        <AcademicGrid />
        <TechCreative />
        <Interests />
      </main>
      <Footer />
    </div>
  );
};

export default App;