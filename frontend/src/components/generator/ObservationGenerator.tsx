"use client";

import { useState } from "react";

const sectors = [
  "High-Rise Building",
  "Bridge & Flyover",
  "Road & Highway",
  "Metro & Railway",
  "Industrial Plant",
  "Oil & Gas",
  "Power Plant",
  "Marine & Port",
  "Mining",
  "General Construction",
];

export default function ObservationGenerator() {
  const [sector, setSector] = useState("");

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 shadow-xl">
      <div className="h-1 bg-yellow-400" />

      <div className="p-8">

        <div className="mb-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400">
            CivilToolsHub
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Construction Safety Observation Generator
          </h2>

          <p className="mt-3 max-w-3xl text-zinc-400">
            Generate professional construction safety observations,
            identify risks, recommend corrective actions and create
            site-ready reports.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <label className="mb-2 block text-sm font-bold text-zinc-300">
              Sector
            </label>

            <select
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-yellow-400"
            >
              <option value="">
                Select Sector
              </option>

              {sectors.map((item) => (
                <option key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-zinc-300">
              Area
            </label>

            <select
              className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-zinc-400"
              disabled
            >
              <option>
                Select Sector First
              </option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-zinc-300">
              Activity
            </label>

            <select
              className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-zinc-400"
              disabled
            >
              <option>
                Select Area First
              </option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-zinc-300">
              Hazard
            </label>

            <select
              className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-zinc-400"
              disabled
            >
              <option>
                Select Activity First
              </option>
            </select>
          </div>

        </div>

        <div className="mt-8">
          <button
            disabled
            className="rounded-lg bg-yellow-400 px-8 py-4 font-black text-zinc-950 opacity-60"
          >
            Generate Observation
          </button>
        </div>

      </div>
    </div>
  );
}