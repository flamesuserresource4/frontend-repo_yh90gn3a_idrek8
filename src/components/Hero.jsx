import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const handleScroll = () => {
    const el = document.getElementById('models');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-[90vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays to improve contrast; allow interaction with Spline */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-28 sm:px-8 lg:px-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
          New: Interactive 3D showcase
        </span>
        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Luxury, Reimagined.
          <span className="block bg-gradient-to-r from-neutral-100 via-rose-200 to-neutral-100 bg-clip-text text-transparent">
            Explore the pinnacle of performance.
          </span>
        </h1>
        <p className="max-w-2xl text-sm/relaxed text-neutral-300 sm:text-base/relaxed">
          Dive into a curated lineup of world‑class grand tourers and supercars. Compare
          specs, explore design highlights, and experience a futuristic 3D hero car in motion.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={handleScroll}
            className="rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-600/30 transition hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-400"
          >
            Browse Models
          </button>
          <a
            href="#compare"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
          >
            Compare Specs
          </a>
        </div>
      </div>
    </section>
  );
}
