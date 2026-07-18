"use client";

import { useMemo, useState } from "react";
import { hazards } from "@/data/observation-generator/hazards";

export default function ObservationGenerator() {
  const sectors = useMemo(() => [...new Set(hazards.map((h) => h.sector))], []);

  const [sector, setSector] = useState("");
  const [area, setArea] = useState("");
  const [hazardName, setHazardName] = useState("");
  const [generated, setGenerated] = useState(false);

  const areas = useMemo(() => {
    return [
      ...new Set(
        hazards
          .filter((h) => h.sector === sector)
          .map((h) => h.area)
      ),
    ];
  }, [sector]);

  const hazardList = useMemo(() => {
    return hazards.filter(
      (h) => h.sector === sector && h.area === area
    );
  }, [sector, area]);

  const selectedHazard = hazards.find(
    (h) =>
      h.sector === sector &&
      h.area === area &&
      h.hazard === hazardName
  );

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
        <h2 className="text-2xl font-black text-white">
          Generate Observation
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {/* 1️⃣ Project Sector Dropdown */}
          <div>
            <label className="mb-2 block text-sm font-bold text-zinc-300">
              Project Sector
            </label>

            <select
              value={sector}
              onChange={(e) => {
                setSector(e.target.value);
                setArea("");
                setHazardName("");
                setGenerated(false);
              }}
              className="w-full rounded-lg border border-zinc-700 bg-zinc-950 p-3 text-white"
            >
              <option value="">Select Sector</option>
              {sectors.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          {/* 2️⃣ Work Area Dropdown */}
          <div>
            <label className="mb-2 block text-sm font-bold text-zinc-300">
              Work Area
            </label>

            <select
              value={area}
              onChange={(e) => {
                setArea(e.target.value);
                setHazardName("");
                setGenerated(false);
              }}
              className="w-full rounded-lg border border-zinc-700 bg-zinc-950 p-3 text-white"
            >
              <option value="">Select Area</option>
              {areas.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          {/* 3️⃣ Hazard Dropdown */}
          <div>
            <label className="mb-2 block text-sm font-bold text-zinc-300">
              Hazard
            </label>

            <select
              value={hazardName}
              onChange={(e) => {
                setHazardName(e.target.value);
                setGenerated(false);
              }}
              className="w-full rounded-lg border border-zinc-700 bg-zinc-950 p-3 text-white"
            >
              <option value="">Select Hazard</option>
              {hazardList.map((item) => (
                <option key={item.id}>
                  {item.hazard}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Added Generate Button Container */}
        <div className="mt-8 flex justify-end">
          <button
            type="button"
            onClick={() => setGenerated(true)}
            disabled={!selectedHazard}
            className="rounded-lg bg-yellow-400 px-6 py-3 font-bold text-black transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Generate Observation
          </button>
        </div>
      </div>

      {generated && selectedHazard && (
        <div className="rounded-2xl border border-yellow-400 bg-zinc-900 p-8">
          <h2 className="text-3xl font-black text-yellow-400">
            Generated Observation
          </h2>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="font-black text-white">
                Observation
              </h3>
              <p className="mt-2 text-zinc-300">
                {selectedHazard.observation}
              </p>
            </div>

            <div>
              <h3 className="font-black text-white">
                Risk
              </h3>
              <p className="mt-2 text-zinc-300">
                {selectedHazard.risk}
              </p>
            </div>

            <div>
              <h3 className="font-black text-white">
                Consequences
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
                {selectedHazard.consequences.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-black text-white">
                Corrective Action
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
                {selectedHazard.correctiveAction.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-black text-white">
                Preventive Action
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
                {selectedHazard.preventiveAction.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-zinc-950 p-4">
                <p className="text-xs uppercase text-zinc-500">
                  Responsible
                </p>
                <p className="mt-2 font-bold text-white">
                  {selectedHazard.responsible}
                </p>
              </div>

              <div className="rounded-lg bg-zinc-950 p-4">
                <p className="text-xs uppercase text-zinc-500">
                  Priority
                </p>
                <p className="mt-2 font-bold text-yellow-400">
                  {selectedHazard.priority}
                </p>
              </div>

              <div className="rounded-lg bg-zinc-950 p-4">
                <p className="text-xs uppercase text-zinc-500">
                  Standard
                </p>
                <p className="mt-2 font-bold text-white">
                  {selectedHazard.standard}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}