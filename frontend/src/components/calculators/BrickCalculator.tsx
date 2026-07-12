"use client";

import { useMemo, useState } from "react";

type LengthUnit = "m" | "ft" | "mm";
type BrickPreset = "modular" | "traditional" | "custom";

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

function getBrickDimensions(
  preset: BrickPreset,
  customLength: number,
  customWidth: number,
  customHeight: number
) {
  if (preset === "modular") {
    return {
      length: 190,
      width: 90,
      height: 90,
    };
  }

  if (preset === "traditional") {
    return {
      length: 230,
      width: 110,
      height: 75,
    };
  }

  return {
    length: customLength,
    width: customWidth,
    height: customHeight,
  };
}

export default function BrickCalculator() {
  const [wallLength, setWallLength] = useState("");
  const [wallLengthUnit, setWallLengthUnit] =
    useState<LengthUnit>("m");

  const [wallHeight, setWallHeight] = useState("");
  const [wallHeightUnit, setWallHeightUnit] =
    useState<LengthUnit>("m");

  const [wallThickness, setWallThickness] =
    useState("230");

  const [wallThicknessUnit, setWallThicknessUnit] =
    useState<LengthUnit>("mm");

  const [brickPreset, setBrickPreset] =
    useState<BrickPreset>("modular");

  const [customBrickLength, setCustomBrickLength] =
    useState("190");

  const [customBrickWidth, setCustomBrickWidth] =
    useState("90");

  const [customBrickHeight, setCustomBrickHeight] =
    useState("90");

  const [mortarJoint, setMortarJoint] = useState("10");

  const [openingArea, setOpeningArea] = useState("0");

  const [openingAreaUnit, setOpeningAreaUnit] =
    useState<"m2" | "ft2">("m2");

  const [wastage, setWastage] = useState("5");

  const [copyStatus, setCopyStatus] = useState<
    "idle" | "copied" | "error"
  >("idle");

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

    const thickness = convertToMetres(
      Number(wallThickness),
      wallThicknessUnit
    );

    const grossWallArea = length * height;

    const openingAreaM2 =
      openingAreaUnit === "ft2"
        ? Number(openingArea) * 0.092903
        : Number(openingArea);

    const validOpeningArea = Math.max(
      openingAreaM2 || 0,
      0
    );

    const netWallArea = Math.max(
      grossWallArea - validOpeningArea,
      0
    );

    const wallVolume = netWallArea * thickness;

    const brickDimensions = getBrickDimensions(
      brickPreset,
      Number(customBrickLength),
      Number(customBrickWidth),
      Number(customBrickHeight)
    );

    const brickLengthM =
      brickDimensions.length / 1000;

    const brickWidthM =
      brickDimensions.width / 1000;

    const brickHeightM =
      brickDimensions.height / 1000;

    const jointM = Math.max(
      Number(mortarJoint) || 0,
      0
    ) / 1000;

    const actualBrickVolume =
      brickLengthM * brickWidthM * brickHeightM;

    const nominalBrickVolume =
      (brickLengthM + jointM) *
      (brickWidthM + jointM) *
      (brickHeightM + jointM);

    const validCalculation =
      length > 0 &&
      height > 0 &&
      thickness > 0 &&
      actualBrickVolume > 0 &&
      nominalBrickVolume > 0 &&
      wallVolume > 0;

    const netBricks = validCalculation
      ? wallVolume / nominalBrickVolume
      : 0;

    const wastageValue = Math.max(
      Number(wastage) || 0,
      0
    );

    const wastageBricks =
      netBricks * (wastageValue / 100);

    const totalBricks =
      netBricks + wastageBricks;

    const roundedBrickQuantity =
      totalBricks > 0 ? Math.ceil(totalBricks) : 0;

    const brickworkActualVolume =
      netBricks * actualBrickVolume;

    const wetMortarVolume = validCalculation
      ? Math.max(
          wallVolume - brickworkActualVolume,
          0
        )
      : 0;

    const dryMortarVolume =
      wetMortarVolume * 1.33;

    const bricksPerM3 =
      nominalBrickVolume > 0
        ? 1 / nominalBrickVolume
        : 0;

    return {
      grossWallArea,
      openingAreaM2: validOpeningArea,
      netWallArea,
      wallVolume,
      brickDimensions,
      actualBrickVolume,
      nominalBrickVolume,
      bricksPerM3,
      netBricks,
      wastageBricks,
      totalBricks,
      roundedBrickQuantity,
      wetMortarVolume,
      dryMortarVolume,
    };
  }, [
    wallLength,
    wallLengthUnit,
    wallHeight,
    wallHeightUnit,
    wallThickness,
    wallThicknessUnit,
    brickPreset,
    customBrickLength,
    customBrickWidth,
    customBrickHeight,
    mortarJoint,
    openingArea,
    openingAreaUnit,
    wastage,
  ]);

  async function copyBrickSummary() {
    if (result.roundedBrickQuantity <= 0) {
      return;
    }

    const message = `BRICKWORK REQUIREMENT

WALL DETAILS

Gross Wall Area: ${result.grossWallArea.toFixed(3)} m²
Opening Deduction: ${result.openingAreaM2.toFixed(3)} m²
Net Wall Area: ${result.netWallArea.toFixed(3)} m²
Wall Volume: ${result.wallVolume.toFixed(3)} m³

BRICK DETAILS

Brick Size: ${result.brickDimensions.length} × ${result.brickDimensions.width} × ${result.brickDimensions.height} mm
Mortar Joint: ${mortarJoint} mm
Approx. Bricks per m³: ${result.bricksPerM3.toFixed(2)}

BRICK REQUIREMENT

Net Brick Quantity: ${Math.ceil(result.netBricks)} Nos.
Wastage Allowance: ${wastage}%
Wastage Quantity: ${Math.ceil(result.wastageBricks)} Nos.
Planned Brick Quantity: ${result.roundedBrickQuantity} Nos.

MORTAR ESTIMATE

Wet Mortar Volume: ${result.wetMortarVolume.toFixed(3)} m³
Approx. Dry Mortar Volume: ${result.dryMortarVolume.toFixed(3)} m³

Note: Final brick and mortar quantities shall be verified as per approved drawings, actual wall thickness, brick dimensions, mortar joints, bond pattern, site wastage, and project specifications.`;

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
              Masonry Planning
            </p>
          </div>

          <h2 className="mt-3 text-3xl font-black text-zinc-950">
            Brick Calculator
          </h2>

          <p className="mt-3 text-sm leading-6 text-zinc-600">
            Enter wall dimensions, brick size, mortar joint,
            opening deduction, and wastage allowance.
          </p>

          <div className="mt-8 space-y-7">
            <InputSection
              number="01"
              title="Wall Dimensions"
              description="Enter the overall masonry wall dimensions."
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

                <MeasurementInput
                  label="Wall Thickness"
                  value={wallThickness}
                  unit={wallThicknessUnit}
                  onValueChange={(value) => {
                    setWallThickness(value);
                    resetCopyStatus();
                  }}
                  onUnitChange={(unit) => {
                    setWallThicknessUnit(unit);
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
                        setOpeningArea(event.target.value);
                        resetCopyStatus();
                      }}
                      placeholder="Door + window area"
                      className="w-full min-w-0 rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-950 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/30"
                    />

                    <select
                      value={openingAreaUnit}
                      onChange={(event) => {
                        setOpeningAreaUnit(
                          event.target.value as
                            | "m2"
                            | "ft2"
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
              </div>
            </InputSection>

            <InputSection
              number="02"
              title="Brick Size"
              description="Select a common brick size or enter custom dimensions."
            >
              <label className="block">
                <span className="text-sm font-bold text-zinc-800">
                  Brick Size Preset
                </span>

                <select
                  value={brickPreset}
                  onChange={(event) => {
                    setBrickPreset(
                      event.target.value as BrickPreset
                    );
                    resetCopyStatus();
                  }}
                  className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-950 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/30"
                >
                  <option value="modular">
                    Modular Brick — 190 × 90 × 90 mm
                  </option>

                  <option value="traditional">
                    Traditional Brick — 230 × 110 × 75 mm
                  </option>

                  <option value="custom">
                    Custom Brick Size
                  </option>
                </select>
              </label>

              {brickPreset === "custom" && (
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  <NumberInput
                    label="Brick Length (mm)"
                    value={customBrickLength}
                    onChange={(value) => {
                      setCustomBrickLength(value);
                      resetCopyStatus();
                    }}
                  />

                  <NumberInput
                    label="Brick Width (mm)"
                    value={customBrickWidth}
                    onChange={(value) => {
                      setCustomBrickWidth(value);
                      resetCopyStatus();
                    }}
                  />

                  <NumberInput
                    label="Brick Height (mm)"
                    value={customBrickHeight}
                    onChange={(value) => {
                      setCustomBrickHeight(value);
                      resetCopyStatus();
                    }}
                  />
                </div>
              )}

              <div className="mt-5 border-l-4 border-yellow-400 bg-white p-5">
                <p className="text-xs font-black uppercase tracking-wider text-zinc-500">
                  Selected Brick Size
                </p>

                <p className="mt-2 text-xl font-black text-zinc-950">
                  {result.brickDimensions.length} ×{" "}
                  {result.brickDimensions.width} ×{" "}
                  {result.brickDimensions.height} mm
                </p>
              </div>
            </InputSection>

            <InputSection
              number="03"
              title="Mortar & Wastage"
              description="Set the mortar joint thickness and planning allowance."
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <NumberInput
                  label="Mortar Joint (mm)"
                  value={mortarJoint}
                  onChange={(value) => {
                    setMortarJoint(value);
                    resetCopyStatus();
                  }}
                />

                <NumberInput
                  label="Brick Wastage (%)"
                  value={wastage}
                  onChange={(value) => {
                    setWastage(value);
                    resetCopyStatus();
                  }}
                />
              </div>
            </InputSection>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 text-white shadow-xl">
        <div className="h-1 bg-yellow-400" />

        <div className="p-6 sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-400">
            Live Brickwork Calculation
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Brick Requirement Summary
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            Masonry quantity and preliminary mortar estimate
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <ResultCard
              label="Gross Wall Area"
              value={`${result.grossWallArea.toFixed(
                3
              )} m²`}
            />

            <ResultCard
              label="Net Wall Area"
              value={`${result.netWallArea.toFixed(
                3
              )} m²`}
            />

            <ResultCard
              label="Wall Volume"
              value={`${result.wallVolume.toFixed(3)} m³`}
            />

            <ResultCard
              label="Approx. Bricks / m³"
              value={result.bricksPerM3.toFixed(2)}
            />

            <ResultCard
              label="Net Brick Quantity"
              value={`${Math.ceil(
                result.netBricks
              )} Nos.`}
            />

            <ResultCard
              label="Planned Brick Quantity"
              value={`${result.roundedBrickQuantity} Nos.`}
              highlight
            />

            <ResultCard
              label="Wet Mortar Volume"
              value={`${result.wetMortarVolume.toFixed(
                3
              )} m³`}
            />

            <ResultCard
              label="Approx. Dry Mortar"
              value={`${result.dryMortarVolume.toFixed(
                3
              )} m³`}
            />
          </div>

          {result.roundedBrickQuantity > 0 ? (
            <>
              <div className="mt-6 border-l-4 border-yellow-400 bg-zinc-900 p-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-400">
                  Brick Planning Summary
                </p>

                <p className="mt-3 text-lg leading-8 text-zinc-200">
                  Estimated brickwork requirement is{" "}
                  <strong className="text-yellow-400">
                    {result.roundedBrickQuantity} bricks
                  </strong>{" "}
                  including{" "}
                  <strong className="text-white">
                    {wastage}% wastage allowance
                  </strong>
                  .
                </p>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  Approximate wet mortar requirement is{" "}
                  {result.wetMortarVolume.toFixed(3)} m³.
                </p>
              </div>

              <button
                type="button"
                onClick={copyBrickSummary}
                className="mt-6 w-full rounded-xl bg-yellow-400 px-6 py-4 text-sm font-black uppercase tracking-wider text-zinc-950 shadow-lg transition hover:bg-yellow-300"
              >
                {copyStatus === "copied"
                  ? "Brick Summary Copied"
                  : copyStatus === "error"
                  ? "Copy Failed - Try Again"
                  : "Copy Brick Requirement Summary"}
              </button>

              {copyStatus === "copied" && (
                <p className="mt-3 text-center text-sm font-bold text-yellow-400">
                  Brick requirement message copied to clipboard.
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
                  Enter valid wall dimensions and wall thickness
                  to calculate the brickwork requirement.
                </p>
              </div>
            </div>
          )}

          <p className="mt-6 text-xs leading-5 text-zinc-500">
            Brick and mortar quantities are preliminary planning
            estimates. Verify approved masonry drawings, actual brick
            dimensions, wall thickness, mortar joint thickness, bond
            pattern, openings, breakage, and project specifications
            before procurement or execution.
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