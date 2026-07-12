"use client";

import { useMemo, useState } from "react";

type LengthUnit = "m" | "ft" | "mm";
type AreaUnit = "m2" | "ft2";
type PlasterSide = "one" | "both";
type MixPreset = "1:3" | "1:4" | "1:5" | "1:6" | "custom";
type CopyStatus = "idle" | "copied" | "error";

const unitLabels: Record<LengthUnit, string> = {
  m: "m",
  ft: "ft",
  mm: "mm",
};

function convertToMetres(
  value: number,
  unit: LengthUnit
) {
  if (unit === "ft") {
    return value * 0.3048;
  }

  if (unit === "mm") {
    return value / 1000;
  }

  return value;
}

function convertAreaToSquareMetres(
  value: number,
  unit: AreaUnit
) {
  if (unit === "ft2") {
    return value * 0.092903;
  }

  return value;
}

function getMixRatio(
  preset: MixPreset,
  customCement: number,
  customSand: number
) {
  if (preset === "custom") {
    return {
      cement: customCement,
      sand: customSand,
    };
  }

  const [cement, sand] = preset
    .split(":")
    .map(Number);

  return {
    cement,
    sand,
  };
}

export default function PlasterCalculator() {
  const [wallLength, setWallLength] = useState("");
  const [wallLengthUnit, setWallLengthUnit] =
    useState<LengthUnit>("m");

  const [wallHeight, setWallHeight] = useState("");
  const [wallHeightUnit, setWallHeightUnit] =
    useState<LengthUnit>("m");

  const [openingArea, setOpeningArea] = useState("0");
  const [openingAreaUnit, setOpeningAreaUnit] =
    useState<AreaUnit>("m2");

  const [plasterSide, setPlasterSide] =
    useState<PlasterSide>("one");

  const [plasterThickness, setPlasterThickness] =
    useState("12");

  const [mixPreset, setMixPreset] =
    useState<MixPreset>("1:4");

  const [customCement, setCustomCement] = useState("1");
  const [customSand, setCustomSand] = useState("4");

  const [wastage, setWastage] = useState("5");

  const [copyStatus, setCopyStatus] =
    useState<CopyStatus>("idle");

  function resetCopyStatus() {
    setCopyStatus("idle");
  }

  const result = useMemo(() => {
    const length = convertToMetres(
      Number(wallLength),
      wallLengthUnit
    );

    const height = convertToMetres(
      Number(wallHeight),
      wallHeightUnit
    );

    const grossAreaOneSide = length * height;

    const openingAreaM2 =
      convertAreaToSquareMetres(
        Number(openingArea),
        openingAreaUnit
      );

    const validOpeningArea = Math.max(
      openingAreaM2 || 0,
      0
    );

    const netAreaOneSide = Math.max(
      grossAreaOneSide - validOpeningArea,
      0
    );

    const sideMultiplier =
      plasterSide === "both" ? 2 : 1;

    const grossPlasterArea =
      grossAreaOneSide * sideMultiplier;

    const totalOpeningDeduction =
      validOpeningArea * sideMultiplier;

    const netPlasterArea =
      netAreaOneSide * sideMultiplier;

    const thicknessMetres =
      Math.max(
        Number(plasterThickness) || 0,
        0
      ) / 1000;

    const wetMortarVolume =
      netPlasterArea * thicknessMetres;

    const dryMortarVolume =
      wetMortarVolume * 1.33;

    const mixRatio = getMixRatio(
      mixPreset,
      Number(customCement),
      Number(customSand)
    );

    const cementRatio = Math.max(
      mixRatio.cement || 0,
      0
    );

    const sandRatio = Math.max(
      mixRatio.sand || 0,
      0
    );

    const totalRatio = cementRatio + sandRatio;

    const cementVolume =
      totalRatio > 0
        ? dryMortarVolume *
          (cementRatio / totalRatio)
        : 0;

    const sandVolume =
      totalRatio > 0
        ? dryMortarVolume *
          (sandRatio / totalRatio)
        : 0;

    const cementDensity = 1440;

    const cementWeight =
      cementVolume * cementDensity;

    const cementBags =
      cementWeight / 50;

    const wastageValue = Math.max(
      Number(wastage) || 0,
      0
    );

    const wastageFactor =
      1 + wastageValue / 100;

    const plannedCementWeight =
      cementWeight * wastageFactor;

    const plannedCementBags =
      cementBags * wastageFactor;

    const plannedSandVolume =
      sandVolume * wastageFactor;

    return {
      grossAreaOneSide,
      openingAreaM2: validOpeningArea,
      sideMultiplier,
      grossPlasterArea,
      totalOpeningDeduction,
      netPlasterArea,
      thicknessMetres,
      wetMortarVolume,
      dryMortarVolume,
      cementRatio,
      sandRatio,
      totalRatio,
      cementVolume,
      cementWeight,
      cementBags,
      sandVolume,
      plannedCementWeight,
      plannedCementBags,
      plannedSandVolume,
    };
  }, [
    wallLength,
    wallLengthUnit,
    wallHeight,
    wallHeightUnit,
    openingArea,
    openingAreaUnit,
    plasterSide,
    plasterThickness,
    mixPreset,
    customCement,
    customSand,
    wastage,
  ]);

  async function copyPlasterSummary() {
    if (result.netPlasterArea <= 0) {
      return;
    }

    const sideLabel =
      plasterSide === "both"
        ? "Both Sides"
        : "One Side";

    const message = `PLASTER MATERIAL REQUIREMENT

PLASTER DETAILS

Plaster Side: ${sideLabel}
Gross Plaster Area: ${result.grossPlasterArea.toFixed(3)} m²
Opening Deduction: ${result.totalOpeningDeduction.toFixed(3)} m²
Net Plaster Area: ${result.netPlasterArea.toFixed(3)} m²
Plaster Thickness: ${plasterThickness} mm
Mix Ratio: ${result.cementRatio}:${result.sandRatio}
Wastage Allowance: ${wastage}%

MORTAR REQUIREMENT

Wet Mortar Volume: ${result.wetMortarVolume.toFixed(3)} m³
Approx. Dry Mortar Volume: ${result.dryMortarVolume.toFixed(3)} m³

MATERIAL REQUIREMENT

Cement Before Allowance: ${result.cementWeight.toFixed(2)} kg
Cement Before Allowance: ${result.cementBags.toFixed(2)} bags
Sand Before Allowance: ${result.sandVolume.toFixed(3)} m³

PLANNED MATERIAL QUANTITY

Cement: ${result.plannedCementWeight.toFixed(2)} kg
Cement Bags: ${result.plannedCementBags.toFixed(2)} bags
Suggested Full Cement Bags: ${Math.ceil(result.plannedCementBags)} bags
Sand: ${result.plannedSandVolume.toFixed(3)} m³

Note: Plaster material quantities are preliminary planning estimates. Verify actual surface condition, plaster thickness, approved mortar mix, opening deductions, dry-volume factor, material properties, wastage, and project specifications before procurement or execution.`;

    try {
      await navigator.clipboard.writeText(message);

      setCopyStatus("copied");

      window.setTimeout(() => {
        setCopyStatus("idle");
      }, 3000);
    } catch {
      setCopyStatus("error");
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr]">
      <div className="overflow-hidden rounded-2xl border border-stone-300 bg-stone-100 shadow-lg">
        <div className="h-1 bg-yellow-400" />

        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 bg-yellow-400" />

            <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-700">
              Finishing Work Planning
            </p>
          </div>

          <h2 className="mt-3 text-3xl font-black text-zinc-950">
            Plaster Calculator
          </h2>

          <p className="mt-3 text-sm leading-6 text-zinc-600">
            Calculate plaster area, mortar volume, cement
            requirement, and sand quantity for construction
            planning.
          </p>

          <div className="mt-8 space-y-7">
            <InputSection
              number="01"
              title="Wall Dimensions"
              description="Enter the wall dimensions and total opening area."
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <MeasurementInput
                  label="Wall Length"
                  value={wallLength}
                  unit={wallLengthUnit}
                  onValueChange={(value) => {
                    setWallLength(value);
                    resetCopyStatus();
                  }}
                  onUnitChange={(unit) => {
                    setWallLengthUnit(unit);
                    resetCopyStatus();
                  }}
                />

                <MeasurementInput
                  label="Wall Height"
                  value={wallHeight}
                  unit={wallHeightUnit}
                  onValueChange={(value) => {
                    setWallHeight(value);
                    resetCopyStatus();
                  }}
                  onUnitChange={(unit) => {
                    setWallHeightUnit(unit);
                    resetCopyStatus();
                  }}
                />

                <label className="block">
                  <span className="text-sm font-bold text-zinc-800">
                    Opening Deduction
                  </span>

                  <div className="mt-2 grid grid-cols-[1fr_85px] gap-2">
                    <input
                      type="number"
                      min="0"
                      step="any"
                      value={openingArea}
                      onChange={(event) => {
                        setOpeningArea(
                          event.target.value
                        );
                        resetCopyStatus();
                      }}
                      placeholder="Door + window area"
                      className="w-full min-w-0 rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-950 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/30"
                    />

                    <select
                      value={openingAreaUnit}
                      onChange={(event) => {
                        setOpeningAreaUnit(
                          event.target.value as AreaUnit
                        );
                        resetCopyStatus();
                      }}
                      className="rounded-lg border border-zinc-300 bg-white px-2 py-3 text-sm font-bold text-zinc-950 outline-none focus:border-yellow-500"
                    >
                      <option value="m2">m²</option>
                      <option value="ft2">ft²</option>
                    </select>
                  </div>
                </label>

                <label className="block">
                  <span className="text-sm font-bold text-zinc-800">
                    Plaster Side
                  </span>

                  <select
                    value={plasterSide}
                    onChange={(event) => {
                      setPlasterSide(
                        event.target.value as PlasterSide
                      );
                      resetCopyStatus();
                    }}
                    className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-950 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/30"
                  >
                    <option value="one">
                      One Side
                    </option>

                    <option value="both">
                      Both Sides
                    </option>
                  </select>
                </label>
              </div>
            </InputSection>

            <InputSection
              number="02"
              title="Plaster Specification"
              description="Select plaster thickness and cement-sand mortar ratio."
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-bold text-zinc-800">
                    Plaster Thickness
                  </span>

                  <select
                    value={plasterThickness}
                    onChange={(event) => {
                      setPlasterThickness(
                        event.target.value
                      );
                      resetCopyStatus();
                    }}
                    className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-950 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/30"
                  >
                    <option value="6">6 mm</option>
                    <option value="10">10 mm</option>
                    <option value="12">12 mm</option>
                    <option value="15">15 mm</option>
                    <option value="18">18 mm</option>
                    <option value="20">20 mm</option>
                    <option value="25">25 mm</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-sm font-bold text-zinc-800">
                    Cement : Sand Mix Ratio
                  </span>

                  <select
                    value={mixPreset}
                    onChange={(event) => {
                      setMixPreset(
                        event.target.value as MixPreset
                      );
                      resetCopyStatus();
                    }}
                    className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-950 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/30"
                  >
                    <option value="1:3">1 : 3</option>
                    <option value="1:4">1 : 4</option>
                    <option value="1:5">1 : 5</option>
                    <option value="1:6">1 : 6</option>
                    <option value="custom">
                      Custom Ratio
                    </option>
                  </select>
                </label>
              </div>

              {mixPreset === "custom" && (
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <NumberInput
                    label="Cement Ratio"
                    value={customCement}
                    onChange={(value) => {
                      setCustomCement(value);
                      resetCopyStatus();
                    }}
                  />

                  <NumberInput
                    label="Sand Ratio"
                    value={customSand}
                    onChange={(value) => {
                      setCustomSand(value);
                      resetCopyStatus();
                    }}
                  />
                </div>
              )}

              <div className="mt-5 border-l-4 border-yellow-400 bg-white p-5">
                <p className="text-xs font-black uppercase tracking-wider text-zinc-500">
                  Selected Specification
                </p>

                <p className="mt-2 text-xl font-black text-zinc-950">
                  {plasterThickness} mm Plaster —{" "}
                  {result.cementRatio}:{result.sandRatio} Mix
                </p>
              </div>
            </InputSection>

            <InputSection
              number="03"
              title="Planning Allowance"
              description="Add material allowance for handling and site wastage."
            >
              <NumberInput
                label="Material Wastage (%)"
                value={wastage}
                onChange={(value) => {
                  setWastage(value);
                  resetCopyStatus();
                }}
              />
            </InputSection>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 text-white shadow-xl">
        <div className="h-1 bg-yellow-400" />

        <div className="p-6 sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-400">
            Live Plaster Calculation
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Plaster Material Summary
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            Cement and sand quantity planning
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <ResultCard
              label="Gross Plaster Area"
              value={`${result.grossPlasterArea.toFixed(
                3
              )} m²`}
            />

            <ResultCard
              label="Opening Deduction"
              value={`${result.totalOpeningDeduction.toFixed(
                3
              )} m²`}
            />

            <ResultCard
              label="Net Plaster Area"
              value={`${result.netPlasterArea.toFixed(
                3
              )} m²`}
            />

            <ResultCard
              label="Wet Mortar Volume"
              value={`${result.wetMortarVolume.toFixed(
                3
              )} m³`}
            />

            <ResultCard
              label="Dry Mortar Volume"
              value={`${result.dryMortarVolume.toFixed(
                3
              )} m³`}
            />

            <ResultCard
              label="Cement Requirement"
              value={`${result.plannedCementWeight.toFixed(
                2
              )} kg`}
            />

            <ResultCard
              label="Planned Cement Bags"
              value={`${result.plannedCementBags.toFixed(
                2
              )} bags`}
              highlight
            />

            <ResultCard
              label="Planned Sand Quantity"
              value={`${result.plannedSandVolume.toFixed(
                3
              )} m³`}
            />
          </div>

          {result.netPlasterArea > 0 ? (
            <>
              <div className="mt-6 border-l-4 border-yellow-400 bg-zinc-900 p-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-400">
                  Plaster Planning Summary
                </p>

                <p className="mt-3 text-lg leading-8 text-zinc-200">
                  For{" "}
                  <strong className="text-white">
                    {result.netPlasterArea.toFixed(2)} m²
                  </strong>{" "}
                  plaster area, the planned requirement is
                  approximately{" "}
                  <strong className="text-yellow-400">
                    {Math.ceil(result.plannedCementBags)} cement bags
                  </strong>{" "}
                  and{" "}
                  <strong className="text-white">
                    {result.plannedSandVolume.toFixed(3)} m³ sand
                  </strong>
                  .
                </p>
              </div>

              <button
                type="button"
                onClick={copyPlasterSummary}
                className="mt-6 w-full rounded-xl bg-yellow-400 px-6 py-4 text-sm font-black uppercase tracking-wider text-zinc-950 shadow-lg transition hover:bg-yellow-300"
              >
                {copyStatus === "copied"
                  ? "Plaster Summary Copied"
                  : copyStatus === "error"
                  ? "Copy Failed - Try Again"
                  : "Copy Plaster Material Summary"}
              </button>

              {copyStatus === "copied" && (
                <p className="mt-3 text-center text-sm font-bold text-yellow-400">
                  Plaster material message copied to clipboard.
                </p>
              )}

              {copyStatus === "error" && (
                <p className="mt-3 text-center text-sm font-bold text-red-400">
                  Unable to copy the message. Please try again.
                </p>
              )}
            </>
          ) : (
            <div className="mt-6 border border-zinc-800 bg-zinc-900 p-5">
              <div className="flex items-start gap-4">
                <span className="mt-1 h-3 w-3 shrink-0 bg-yellow-400" />

                <p className="text-sm leading-6 text-zinc-400">
                  Enter valid wall dimensions to calculate the
                  plaster material requirement.
                </p>
              </div>
            </div>
          )}

          <p className="mt-6 text-xs leading-5 text-zinc-500">
            Material quantities are preliminary planning estimates.
            Verify actual surface condition, approved plaster
            thickness, mortar mix proportion, deductions, material
            properties, wastage, and project specifications before
            procurement or execution.
          </p>
        </div>
      </div>
    </div>
  );
}

function InputSection({
  number,
  title,
  description,
  children,
}: {
  number: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="overflow-hidden border border-stone-300 bg-stone-50">
      <div className="flex items-start gap-4 border-b border-stone-300 bg-white p-5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-yellow-400 text-sm font-black text-zinc-950">
          {number}
        </span>

        <div>
          <h3 className="font-black text-zinc-950">
            {title}
          </h3>

          <p className="mt-1 text-sm leading-6 text-zinc-600">
            {description}
          </p>
        </div>
      </div>

      <div className="p-5">{children}</div>
    </section>
  );
}

function MeasurementInput({
  label,
  value,
  unit,
  onValueChange,
  onUnitChange,
}: {
  label: string;
  value: string;
  unit: LengthUnit;
  onValueChange: (value: string) => void;
  onUnitChange: (unit: LengthUnit) => void;
}) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-zinc-800">
        {label}
      </span>

      <div className="mt-2 grid grid-cols-[1fr_80px] gap-2">
        <input
          type="number"
          min="0"
          step="any"
          value={value}
          onChange={(event) =>
            onValueChange(event.target.value)
          }
          placeholder="0"
          className="w-full min-w-0 rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-950 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/30"
        />

        <select
          value={unit}
          onChange={(event) =>
            onUnitChange(
              event.target.value as LengthUnit
            )
          }
          className="rounded-lg border border-zinc-300 bg-white px-2 py-3 text-sm font-bold text-zinc-950 outline-none focus:border-yellow-500"
        >
          {Object.entries(unitLabels).map(
            ([unitValue, unitLabel]) => (
              <option key={unitValue} value={unitValue}>
                {unitLabel}
              </option>
            )
          )}
        </select>
      </div>
    </label>
  );
}

function NumberInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-zinc-800">
        {label}
      </span>

      <input
        type="number"
        min="0"
        step="any"
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-950 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/30"
      />
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
      className={`rounded-xl border p-5 ${
        highlight
          ? "border-yellow-400 bg-yellow-400"
          : "border-zinc-800 bg-zinc-900"
      }`}
    >
      <p
        className={`text-sm ${
          highlight
            ? "font-bold text-zinc-700"
            : "text-zinc-400"
        }`}
      >
        {label}
      </p>

      <p
        className={`mt-2 text-2xl font-black ${
          highlight
            ? "text-zinc-950"
            : "text-white"
        }`}
      >
        {value}
      </p>
    </div>
  );
}