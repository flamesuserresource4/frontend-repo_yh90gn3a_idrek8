import React from 'react';
import { Gauge, Zap, Shield, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Gauge,
    title: 'Precision Performance',
    desc: 'Hyper-responsive dynamics with race-derived chassis tuning and active aero.',
  },
  {
    icon: Zap,
    title: 'Electrified Power',
    desc: 'Hybrid and EV powertrains deliver instant torque and breathtaking acceleration.',
  },
  {
    icon: Shield,
    title: 'Crafted Safety',
    desc: 'Adaptive systems and carbon-ceramic braking for supreme control and confidence.',
  },
  {
    icon: Sparkles,
    title: 'Bespoke Luxury',
    desc: 'Hand-finished cabins with sustainable materials and immersive ambient lighting.',
  },
];

export default function Highlights() {
  return (
    <section className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Design & Engineering Highlights</h2>
            <p className="mt-2 max-w-2xl text-sm text-neutral-400">
              A showcase of cutting‑edge innovation that blurs the line between road and racetrack.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 transition hover:from-white/10 hover:to-white/[0.06]"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-rose-600/20 text-rose-300 ring-1 ring-inset ring-rose-500/30">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-1 text-lg font-semibold">{title}</h3>
              <p className="text-sm text-neutral-300">{desc}</p>
              <div className="pointer-events-none absolute -inset-1 -z-0 opacity-0 blur-2xl transition group-hover:opacity-40" style={{
                background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(244,63,94,0.15), transparent 40%)'
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
