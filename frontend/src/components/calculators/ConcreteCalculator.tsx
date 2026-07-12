"use client";

import { useMemo, useState } from "react";

type Unit = "m" | "ft" | "mm";
type ConcreteMode = "rmc" | "site";

type MixRatio = {
  label: string;
  cement: number;
  sand: number;
  aggregate: number;
};

const mixRatios: MixRatio[] = [
  {
    label: "M5 - 1:5:10",
    cement: 1,
    sand: 5,
    aggregate: 10,
  },
  {
    label: "M7.5 - 1:4:8",
    cement: 1,
    sand: 4,
    aggregate: 8,
  },
  {
    label: "M10 - 1:3:6",
    cement: 1,
    sand: 3,
    aggregate: 6,
  },
  {
    label: "M15 - 1:2:4",
    cement: 1,
    sand: 2,
    aggregate: 4,
  },
  {
    label: "M20 - 1:1.5:3",
    cement: 1,
    sand: 1.5,
    aggregate: 3,
  },
];

const rmcGrades = [
  "M10",
  "M15",
  "M20",
  "M25",
  "M30",
  "M35",
  "M40",
  "M45",
  "M50",
  "M55",
  "M60",
];

const unitLabels: Record<Unit, string> = {
  m: "Meter (m)",
  ft: "Feet (ft)",
  mm: "Millimeter (mm)",
};

function convertToMetres(value: number, unit: Unit) {
  if (unit === "ft") {
    return value * 0.3048;
  }

  if (unit === "mm") {
    return value / 1000;
  }

  return value;
}

function roundUp(value: number, step: number) {
  return Math.ceil(value / step) * step;
}

export default function ConcreteCalculator() {
  const [mode, setMode] = useState<ConcreteMode>("rmc");

  const [length, setLength] = useState("");
  const [lengthUnit, setLengthUnit] = useState<Unit>("m");

  const [width, setWidth] = useState("");
  const [widthUnit, setWidthUnit] = useState<Unit>("m");

  const [depth, setDepth] = useState("");
  const [depthUnit, setDepthUnit] = useState<Unit>("m");

  const [wastage, setWastage] = useState("5");
  const [mixIndex, setMixIndex] = useState("4");

  const [rmcGrade, setRmcGrade] = useState("M25");
  const [mixerCapacity, setMixerCapacity] = useState("6");

  const result = useMemo(() => {
    const rawLength = Number(length);
    const rawWidth = Number(width);
    const rawDepth = Number(depth);
    const wastageValue = Number(wastage);
    const mixerCapacityValue = Number(mixerCapacity);

    if (
      rawLength <= 0 ||
      rawWidth <= 0 ||
      rawDepth <= 0 ||
      wastageValue < 0
    ) {
      return null;
    }

    const lengthValue = convertToMetres(rawLength, lengthUnit);
    const widthValue = convertToMetres(rawWidth, widthUnit);
    const depthValue = convertToMetres(rawDepth, depthUnit);

    const wetVolume = lengthValue * widthValue * depthValue;

    const allowanceVolume = wetVolume * (wastageValue / 100);

    const requiredVolume = wetVolume + allowanceVolume;

    if (mode === "rmc") {
      const suggestedOrderVolume = roundUp(requiredVolume, 0.5);

      const mixerLoads =
        mixerCapacityValue > 0
          ? requiredVolume / mixerCapacityValue
          : 0;

      const fullMixerLoads = Math.floor(mixerLoads);

      const remainingVolume =
        mixerCapacityValue > 0
          ? requiredVolume -
            fullMixerLoads * mixerCapacityValue
          : 0;

      return {
        mode: "rmc" as const,
        wetVolume,
        allowanceVolume,
        requiredVolume,
        suggestedOrderVolume,
        mixerLoads,
        fullMixerLoads,
        remainingVolume,
      };
    }

    const selectedMix = mixRatios[Number(mixIndex)];

    const dryVolume = requiredVolume * 1.54;

    const totalRatio =
      selectedMix.cement +
      selectedMix.sand +
      selectedMix.aggregate;

    const cementVolume =
      (dryVolume * selectedMix.cement) / totalRatio;

    const sandVolume =
      (dryVolume * selectedMix.sand) / totalRatio;

    const aggregateVolume =
      (dryVolume * selectedMix.aggregate) / totalRatio;

    const cementBags = cementVolume / 0.0347;
    const cementKg = cementBags * 50;

    return {
      mode: "site" as const,
      wetVolume,
      allowanceVolume,
      requiredVolume,
      dryVolume,
      cementBags,
      cementKg,
      sandVolume,
      aggregateVolume,
    };
  }, [
    mode,
    length,
    lengthUnit,
    width,
    widthUnit,
    depth,
    depthUnit,
    wastage,
    mixIndex,
    mixerCapacity,
  ]);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="overflow-hidden rounded-2xl border border-stone-300 bg-stone-100 shadow-lg">
        <div className="h-1 bg-yellow-400" />

        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 bg-yellow-400" />

            <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-700">
              Concrete Input
            </p>
          </div>

          <h2 className="mt-3 text-2xl font-black text-zinc-950">
            Concrete Requirement
          </h2>

          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Select RMC for ready-mix ordering or Site Mix for nominal material
            estimation.
          </p>

          <div className="mt-6 grid grid-cols-2 rounded-xl border border-zinc-300 bg-white p-1">
            <button
              type="button"
              onClick={() => setMode("rmc")}
              className={`rounded-lg px-4 py-3 text-sm font-black transition ${
                mode === "rmc"
                  ? "bg-zinc-950 text-yellow-400 shadow-md"
                  : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              RMC / Ready Mix
            </button>

            <button
              type="button"
              onClick={() => setMode("site")}
              className={`rounded-lg px-4 py-3 text-sm font-black transition ${
                mode === "site"
                  ? "bg-zinc-950 text-yellow-400 shadow-md"
                  : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              Site Mix
            </button>
          </div>

          <div className="mt-8 space-y-6">
            <DimensionInput
              label="Length"
              value={length}
              unit={lengthUnit}
              onValueChange={setLength}
              onUnitChange={setLengthUnit}
              placeholder="Example: 30"
            />

            <DimensionInput
              label="Width"
              value={width}
              unit={widthUnit}
              onValueChange={setWidth}
              onUnitChange={setWidthUnit}
              placeholder="Example: 20"
            />

            <DimensionInput
              label="Depth / Thickness"
              value={depth}
              unit={depthUnit}
              onValueChange={setDepth}
              onUnitChange={setDepthUnit}
              placeholder="Example: 150"
            />
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-bold text-zinc-800">
                Allowance / Wastage (%)
              </span>

              <input
                type="number"
                min="0"
                step="any"
                value={wastage}
                onChange={(event) => setWastage(event.target.value)}
                className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-950 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/30"
              />
            </label>

            {mode === "rmc" ? (
              <label className="block">
                <span className="text-sm font-bold text-zinc-800">
                  RMC Grade
                </span>

                <select
                  value={rmcGrade}
                  onChange={(event) => setRmcGrade(event.target.value)}
                  className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-950 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/30"
                >
                  {rmcGrades.map((grade) => (
                    <option key={grade} value={grade}>
                      {grade}
                    </option>
                  ))}
                </select>
              </label>
            ) : (
              <label className="block">
                <span className="text-sm font-bold text-zinc-800">
                  Nominal Concrete Mix
                </span>

                <select
                  value={mixIndex}
                  onChange={(event) => setMixIndex(event.target.value)}
                  className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-950 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/30"
                >
                  {mixRatios.map((mix, index) => (
                    <option key={mix.label} value={index}>
                      {mix.label}
                    </option>
                  ))}
                </select>
              </label>
            )}
          </div>

          {mode === "rmc" && (
            <label className="mt-6 block">
              <span className="text-sm font-bold text-zinc-800">
                Transit Mixer Capacity (m³)
              </span>

              <select
                value={mixerCapacity}
                onChange={(event) => setMixerCapacity(event.target.value)}
                className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-950 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/30"
              >
                <option value="4">4 m³</option>
                <option value="5">5 m³</option>
                <option value="6">6 m³</option>
                <option value="7">7 m³</option>
                <option value="8">8 m³</option>
                <option value="9">9 m³</option>
                <option value="10">10 m³</option>
              </select>
            </label>
          )}
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 text-white shadow-xl">
        <div className="h-1 bg-yellow-400" />

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-400">
                Live Calculation
              </p>

              <h2 className="mt-3 text-2xl font-black">
                Calculation Result
              </h2>

              <p className="mt-2 text-sm text-zinc-400">
                {mode === "rmc"
                  ? `${rmcGrade} Ready Mix Concrete`
                  : "Nominal Site Mix Estimate"}
              </p>
            </div>

            <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-black text-yellow-400">
              {mode === "rmc" ? "RMC ORDER" : "SITE MIX"}
            </span>
          </div>

          {!result ? (
            <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
              <div className="flex items-start gap-4">
                <span className="mt-1 h-3 w-3 shrink-0 bg-yellow-400" />

                <p className="text-sm leading-6 text-zinc-400">
                  Enter valid length, width, and depth values to view the
                  concrete calculation result.
                </p>
              </div>
            </div>
          ) : result.mode === "rmc" ? (
            <>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <ResultCard
                  label="Net Concrete Volume"
                  value={`${result.wetVolume.toFixed(3)} m³`}
                />

                <ResultCard
                  label="Allowance Quantity"
                  value={`${result.allowanceVolume.toFixed(3)} m³`}
                />

                <ResultCard
                  label="Required RMC Volume"
                  value={`${result.requiredVolume.toFixed(3)} m³`}
                />

                <ResultCard
                  label="Suggested Order Quantity"
                  value={`${result.suggestedOrderVolume.toFixed(1)} m³`}
                  highlight
                />

                <ResultCard
                  label="Approx. Mixer Loads"
                  value={`${result.mixerLoads.toFixed(2)} loads`}
                />

                <ResultCard
                  label="Full Loads + Balance"
                  value={`${result.fullMixerLoads} + ${result.remainingVolume.toFixed(
                    2
                  )} m³`}
                />
              </div>

              <div className="mt-6 border-l-4 border-yellow-400 bg-zinc-900 p-5">
                <p className="text-sm font-black uppercase tracking-wider text-yellow-400">
                  RMC Order Summary
                </p>

                <p className="mt-3 text-lg leading-8 text-zinc-200">
                  Estimated requirement:{" "}
                  <strong className="text-white">
                    {result.requiredVolume.toFixed(3)} m³
                  </strong>
                  . Suggested planning quantity:{" "}
                  <strong className="text-yellow-400">
                    {result.suggestedOrderVolume.toFixed(1)} m³
                  </strong>{" "}
                  of{" "}
                  <strong className="text-white">
                    {rmcGrade}
                  </strong>{" "}
                  RMC.
                </p>
              </div>

              <p className="mt-6 text-xs leading-5 text-zinc-500">
                Suggested order quantity is rounded up to the next 0.5 m³ for
                planning convenience. Confirm minimum dispatch quantity,
                partial load policy, approved grade, pour sequence, and actual
                site requirement before placing an order.
              </p>
            </>
          ) : (
            <>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <ResultCard
                  label="Wet Concrete Volume"
                  value={`${result.wetVolume.toFixed(3)} m³`}
                />

                <ResultCard
                  label="Volume With Wastage"
                  value={`${result.requiredVolume.toFixed(3)} m³`}
                />

                <ResultCard
                  label="Dry Volume"
                  value={`${result.dryVolume.toFixed(3)} m³`}
                />

                <ResultCard
                  label="Cement"
                  value={`${result.cementBags.toFixed(2)} bags`}
                  highlight
                />

                <ResultCard
                  label="Cement Weight"
                  value={`${result.cementKg.toFixed(0)} kg`}
                />

                <ResultCard
                  label="Sand"
                  value={`${result.sandVolume.toFixed(3)} m³`}
                />

                <ResultCard
                  label="Aggregate"
                  value={`${result.aggregateVolume.toFixed(3)} m³`}
                />
              </div>

              <p className="mt-6 text-xs leading-5 text-zinc-500">
                Site-mix material quantities are approximate estimates based on
                nominal mix ratios and a dry-volume factor of 1.54. Actual
                requirements may vary.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function DimensionInput({
  label,
  value,
  unit,
  onValueChange,
  onUnitChange,
  placeholder,
}: {
  label: string;
  value: string;
  unit: Unit;
  onValueChange: (value: string) => void;
  onUnitChange: (unit: Unit) => void;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-zinc-800">
        {label}
      </span>

      <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-[1fr_170px]">
        <input
          type="number"
          min="0"
          step="any"
          value={value}
          onChange={(event) => onValueChange(event.target.value)}
          placeholder={placeholder}
          className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-950 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/30"
        />

        <select
          value={unit}
          onChange={(event) => onUnitChange(event.target.value as Unit)}
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-3 text-sm text-zinc-950 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/30"
        >
          {Object.entries(unitLabels).map(([unitValue, unitLabel]) => (
            <option key={unitValue} value={unitValue}>
              {unitLabel}
            </option>
          ))}
        </select>
      </div>
    </label>
  );
}

function ResultCard({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-5 transition ${
        highlight
          ? "border-yellow-400 bg-yellow-400"
          : "border-zinc-800 bg-zinc-900"
      }`}
    >
      <p
        className={`text-sm ${
          highlight ? "font-bold text-zinc-700" : "text-zinc-400"
        }`}
      >
        {label}
      </p>

      <p
        className={`mt-2 text-2xl font-black ${
          highlight ? "text-zinc-950" : "text-white"
        }`}
      >
        {value}
      </p>
    </div>
  );
}