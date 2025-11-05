import React from 'react';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import ModelsShowcase from './components/ModelsShowcase';
import SpecCompare from './components/SpecCompare';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <Highlights />
      <ModelsShowcase />
      <SpecCompare />

      <footer className="border-t border-white/10 bg-neutral-950 py-10 text-sm text-neutral-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row sm:px-8 lg:px-10">
          <p>
            © {new Date().getFullYear()} LuxDrive. Crafted for enthusiasts.
          </p>
          <nav className="flex items-center gap-6">
            <a href="#models" className="hover:text-white">Models</a>
            <a href="#compare" className="hover:text-white">Compare</a>
            <a href="#" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
