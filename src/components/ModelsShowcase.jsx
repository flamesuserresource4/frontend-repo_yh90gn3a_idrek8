import React from 'react';
import { Car, Star } from 'lucide-react';

const models = [
  {
    name: 'Aurelia GT',
    tagline: 'V12 grand tourer',
    specs: { power: '715 hp', zeroToSixty: '3.1s', topSpeed: '211 mph' },
    rating: 4.9,
    colorFrom: '#0f0f10',
    colorTo: '#1a1a1c',
  },
  {
    name: 'Vanta RS',
    tagline: 'Hybrid super coupe',
    specs: { power: '805 hp', zeroToSixty: '2.7s', topSpeed: '217 mph' },
    rating: 4.8,
    colorFrom: '#111113',
    colorTo: '#1c1c23',
  },
  {
    name: 'Eon HyperX',
    tagline: 'All-electric flagship',
    specs: { power: '1000+ hp', zeroToSixty: '2.1s', topSpeed: '236 mph' },
    rating: 4.9,
    colorFrom: '#0d0d0e',
    colorTo: '#171719',
  },
];

export default function ModelsShowcase() {
  return (
    <section id="models" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Signature Models</h2>
            <p className="mt-2 max-w-2xl text-sm text-neutral-400">
              A curated selection of high‑performance icons. Explore key specs at a glance.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {models.map((m) => (
            <article
              key={m.name}
              className="group relative overflow-hidden rounded-2xl border border-white/10 p-6"
              style={{
                background: `linear-gradient(180deg, ${m.colorFrom}, ${m.colorTo})`,
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-inset ring-white/10">
                    <Car className="h-5 w-5 text-white/80" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{m.name}</h3>
                    <p className="text-xs text-neutral-400">{m.tagline}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm font-medium">{m.rating}</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <Spec label="Power" value={m.specs.power} />
                <Spec label="0–60" value={m.specs.zeroToSixty} />
                <Spec label="Top Speed" value={m.specs.topSpeed} />
              </div>

              <div className="mt-6 flex items-center justify-between">
                <button className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-neutral-900 transition hover:bg-white">
                  View details
                </button>
                <a href="#compare" className="text-xs text-neutral-300 underline-offset-4 hover:underline">
                  Compare
                </a>
              </div>

              <div
                className="pointer-events-none absolute -bottom-20 right-0 h-40 w-40 rounded-full opacity-20 blur-2xl"
                style={{ background: 'radial-gradient(circle, rgba(244,63,94,0.6), transparent 60%)' }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Spec({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
      <div className="text-[10px] uppercase tracking-wide text-neutral-400">{label}</div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}
