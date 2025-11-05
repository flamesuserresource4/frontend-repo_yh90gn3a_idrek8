import React from 'react';

const rows = [
  { model: 'Aurelia GT', power: '715 hp', torque: '660 Nm', weight: '1,720 kg', drivetrain: 'RWD' },
  { model: 'Vanta RS', power: '805 hp', torque: '900 Nm', weight: '1,840 kg', drivetrain: 'AWD (Hybrid)' },
  { model: 'Eon HyperX', power: '1000+ hp', torque: '1,200 Nm', weight: '2,050 kg', drivetrain: 'AWD (EV)' },
];

export default function SpecCompare() {
  return (
    <section id="compare" className="w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold sm:text-3xl">Specification Comparison</h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-400">
            Compare power, torque, weight, and drivetrain across our featured models.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10">
          <table className="min-w-full divide-y divide-white/10">
            <thead className="bg-white/5">
              <tr>
                <Th>Model</Th>
                <Th>Power</Th>
                <Th>Torque</Th>
                <Th>Weight</Th>
                <Th>Drivetrain</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 bg-black/20">
              {rows.map((r) => (
                <tr key={r.model} className="hover:bg-white/[0.04]">
                  <Td>{r.model}</Td>
                  <Td>{r.power}</Td>
                  <Td>{r.torque}</Td>
                  <Td>{r.weight}</Td>
                  <Td>{r.drivetrain}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-neutral-500">
          Figures are manufacturer‑quoted. Actual performance may vary based on configuration and conditions.
        </p>
      </div>
    </section>
  );
}

function Th({ children }) {
  return (
    <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-300">
      {children}
    </th>
  );
}

function Td({ children }) {
  return (
    <td className="px-4 py-4 text-sm text-neutral-200">{children}</td>
  );
}
