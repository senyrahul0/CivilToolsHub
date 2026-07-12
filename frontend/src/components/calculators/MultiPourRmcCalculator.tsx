"use client";

import { useMemo, useState } from "react";

type Unit = "m" | "ft" | "mm";

type PourType =
  | "Slab"
  | "Beam"
  | "Column"
  | "Wall"
  | "Staircase"
  | "Other";

type PourItem = {
  id: number;
  name: string;
  type: PourType;
  length: string;
  lengthUnit: Unit;
  width: string;
  widthUnit: Unit;
  depth: string;
  depthUnit: Unit;
  quantity: string;
};

type CopyStatus = "idle" | "copied" | "error";

const unitLabels: Record<Unit, string> = {
  m: "m",
  ft: "ft",
  mm: "mm",
};

const pourTypes: PourType[] = [
  "Slab",
  "Beam",
  "Column",
  "Wall",
  "Staircase",
  "Other",
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

function createPourItem(id: number): PourItem {
  return {
    id,
    name: `Pour Item ${id}`,
    type: "Slab",
    length: "",
    lengthUnit: "m",
    width: "",
    widthUnit: "m",
    depth: "",
    depthUnit: "mm",
    quantity: "1",
  };
}

export default function MultiPourRmcCalculator() {
  const [items, setItems] = useState<PourItem[]>([
    createPourItem(1),
  ]);

  const [nextId, setNextId] = useState(2);
  const [allowance, setAllowance] = useState("5");
  const [rmcGrade, setRmcGrade] = useState("M25");
  const [mixerCapacity, setMixerCapacity] = useState("6");
  const [copyStatus, setCopyStatus] =
    useState<CopyStatus>("idle");

  function resetCopyStatus() {
    setCopyStatus("idle");
  }

  function addItem() {
    setItems((currentItems) => [
      ...currentItems,
      createPourItem(nextId),
    ]);

    setNextId((currentId) => currentId + 1);
    resetCopyStatus();
  }

  function removeItem(id: number) {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );

    resetCopyStatus();
  }

  function updateItem<K extends keyof PourItem>(
    id: number,
    field: K,
    value: PourItem[K]
  ) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value,
            }
          : item
      )
    );

    resetCopyStatus();
  }

  const result = useMemo(() => {
    const calculatedItems = items.map((item) => {
      const rawLength = Number(item.length);
      const rawWidth = Number(item.width);
      const rawDepth = Number(item.depth);
      const quantity = Number(item.quantity);

      if (
        rawLength <= 0 ||
        rawWidth <= 0 ||
        rawDepth <= 0 ||
        quantity <= 0
      ) {
        return {
          id: item.id,
          name: item.name,
          type: item.type,
          volume: 0,
        };
      }

      const length = convertToMetres(
        rawLength,
        item.lengthUnit
      );

      const width = convertToMetres(
        rawWidth,
        item.widthUnit
      );

      const depth = convertToMetres(
        rawDepth,
        item.depthUnit
      );

      const volume =
        length * width * depth * quantity;

      return {
        id: item.id,
        name: item.name,
        type: item.type,
        volume,
      };
    });

    const netVolume = calculatedItems.reduce(
      (total, item) => total + item.volume,
      0
    );

    const allowanceValue = Math.max(
      Number(allowance) || 0,
      0
    );

    const allowanceVolume =
      netVolume * (allowanceValue / 100);

    const requiredVolume =
      netVolume + allowanceVolume;

    const suggestedOrderVolume =
      requiredVolume > 0
        ? roundUp(requiredVolume, 0.5)
        : 0;

    const mixerCapacityValue =
      Number(mixerCapacity);

    const mixerLoads =
      mixerCapacityValue > 0
        ? requiredVolume / mixerCapacityValue
        : 0;

    const fullLoads = Math.floor(mixerLoads);

    const balanceVolume =
      mixerCapacityValue > 0
        ? requiredVolume -
          fullLoads * mixerCapacityValue
        : 0;

    return {
      calculatedItems,
      netVolume,
      allowanceVolume,
      requiredVolume,
      suggestedOrderVolume,
      mixerLoads,
      fullLoads,
      balanceVolume,
    };
  }, [items, allowance, mixerCapacity]);

  async function copyRmcSummary() {
    if (result.requiredVolume <= 0) {
      return;
    }

    const validItems = result.calculatedItems.filter(
      (item) => item.volume > 0
    );

    const itemSummary = validItems
      .map(
        (item, index) =>
          `${index + 1}. ${item.name || `Pour Item ${index + 1}`}\n` +
          `Type: ${item.type}\n` +
          `Volume: ${item.volume.toFixed(3)} m³`
      )
      .join("\n\n");

    const message = `RMC REQUIREMENT

POUR DETAILS

${itemSummary}

RMC ORDER SUMMARY

Grade: ${rmcGrade}
Total Net Volume: ${result.netVolume.toFixed(3)} m³
Allowance / Wastage: ${allowance}%
Allowance Quantity: ${result.allowanceVolume.toFixed(3)} m³
Required RMC: ${result.requiredVolume.toFixed(3)} m³
Planned Order Quantity: ${result.suggestedOrderVolume.toFixed(1)} m³
Transit Mixer Capacity: ${mixerCapacity} m³
Approx. Mixer Loads: ${result.mixerLoads.toFixed(2)} loads
Full Loads + Balance: ${result.fullLoads} + ${result.balanceVolume.toFixed(
      2
    )} m³

Please arrange ${rmcGrade} RMC as per the above requirement.

Note: Final quantity and grade shall be verified as per approved drawings, mix design, pour sequence, and actual site conditions.`;

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
    <div className="space-y-8">
      <div className="overflow-hidden rounded-2xl border border-stone-300 bg-stone-100 shadow-lg">
        <div className="h-1 bg-yellow-400" />

        <div className="p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 bg-yellow-400" />

                <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-700">
                  RMC Pour Planning
                </p>
              </div>

              <h2 className="mt-3 text-3xl font-black text-zinc-950">
                Multi-Pour RMC Calculator
              </h2>

              <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-600">
                Add slab, beam, column, wall, staircase, or other concrete
                items and calculate the combined RMC requirement.
              </p>
            </div>

            <button
              type="button"
              onClick={addItem}
              className="shrink-0 rounded-lg bg-yellow-400 px-5 py-3 text-sm font-black text-zinc-950 shadow-md transition hover:bg-yellow-300"
            >
              + Add Pour Item
            </button>
          </div>

          <div className="mt-8 space-y-6">
            {items.map((item, index) => {
              const itemVolume =
                result.calculatedItems.find(
                  (calculatedItem) =>
                    calculatedItem.id === item.id
                )?.volume ?? 0;

              return (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-2xl border border-zinc-300 bg-white shadow-sm"
                >
                  <div className="flex flex-col gap-4 border-b border-zinc-200 bg-zinc-950 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <span className="flex h-10 w-10 items-center justify-center bg-yellow-400 text-sm font-black text-zinc-950">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-yellow-400">
                          Concrete Pour Item
                        </p>

                        <h3 className="mt-1 text-lg font-black text-white">
                          {item.name || `Item ${index + 1}`}
                        </h3>
                      </div>
                    </div>

                    {items.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="w-fit border border-red-500/40 bg-red-500/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-red-400 transition hover:bg-red-500 hover:text-white"
                      >
                        Remove Item
                      </button>
                    )}
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="grid gap-5 md:grid-cols-2">
                      <label className="block">
                        <span className="text-sm font-bold text-zinc-800">
                          Item Name
                        </span>

                        <input
                          type="text"
                          value={item.name}
                          onChange={(event) =>
                            updateItem(
                              item.id,
                              "name",
                              event.target.value
                            )
                          }
                          placeholder="Example: Tower 1 Slab"
                          className="mt-2 w-full rounded-lg border border-zinc-300 bg-stone-50 px-4 py-3 text-zinc-950 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/30"
                        />
                      </label>

                      <label className="block">
                        <span className="text-sm font-bold text-zinc-800">
                          Pour Type
                        </span>

                        <select
                          value={item.type}
                          onChange={(event) =>
                            updateItem(
                              item.id,
                              "type",
                              event.target.value as PourType
                            )
                          }
                          className="mt-2 w-full rounded-lg border border-zinc-300 bg-stone-50 px-4 py-3 text-zinc-950 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/30"
                        >
                          {pourTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>

                    <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                      <MeasurementInput
                        label="Length"
                        value={item.length}
                        unit={item.lengthUnit}
                        onValueChange={(value) =>
                          updateItem(
                            item.id,
                            "length",
                            value
                          )
                        }
                        onUnitChange={(unit) =>
                          updateItem(
                            item.id,
                            "lengthUnit",
                            unit
                          )
                        }
                      />

                      <MeasurementInput
                        label="Width"
                        value={item.width}
                        unit={item.widthUnit}
                        onValueChange={(value) =>
                          updateItem(
                            item.id,
                            "width",
                            value
                          )
                        }
                        onUnitChange={(unit) =>
                          updateItem(
                            item.id,
                            "widthUnit",
                            unit
                          )
                        }
                      />

                      <MeasurementInput
                        label="Depth / Thickness"
                        value={item.depth}
                        unit={item.depthUnit}
                        onValueChange={(value) =>
                          updateItem(
                            item.id,
                            "depth",
                            value
                          )
                        }
                        onUnitChange={(unit) =>
                          updateItem(
                            item.id,
                            "depthUnit",
                            unit
                          )
                        }
                      />

                      <label className="block">
                        <span className="text-sm font-bold text-zinc-800">
                          Quantity
                        </span>

                        <input
                          type="number"
                          min="1"
                          step="1"
                          value={item.quantity}
                          onChange={(event) =>
                            updateItem(
                              item.id,
                              "quantity",
                              event.target.value
                            )
                          }
                          className="mt-2 w-full rounded-lg border border-zinc-300 bg-stone-50 px-4 py-3 text-zinc-950 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/30"
                        />
                      </label>
                    </div>

                    <div className="mt-6 flex flex-col gap-4 border-l-4 border-yellow-400 bg-stone-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-zinc-500">
                          Calculated Item Volume
                        </p>

                        <p className="mt-2 text-2xl font-black text-zinc-950">
                          {itemVolume.toFixed(3)} m³
                        </p>
                      </div>

                      <span className="w-fit bg-zinc-950 px-4 py-2 text-xs font-black uppercase tracking-wider text-yellow-400">
                        {item.type}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            onClick={addItem}
            className="mt-6 w-full rounded-xl border-2 border-dashed border-zinc-400 bg-stone-50 px-5 py-5 text-sm font-black text-zinc-700 transition hover:border-yellow-500 hover:bg-yellow-50 hover:text-zinc-950"
          >
            + Add Another Concrete Pour Item
          </button>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="overflow-hidden rounded-2xl border border-stone-300 bg-stone-100 shadow-lg">
          <div className="h-1 bg-yellow-400" />

          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 bg-yellow-400" />

              <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-700">
                Order Configuration
              </p>
            </div>

            <h2 className="mt-3 text-2xl font-black text-zinc-950">
              RMC Order Settings
            </h2>

            <p className="mt-2 text-sm leading-6 text-zinc-600">
              Select the approved concrete grade, planning allowance, and
              transit mixer capacity.
            </p>

            <div className="mt-7 space-y-6">
              <label className="block">
                <span className="text-sm font-bold text-zinc-800">
                  RMC Grade
                </span>

                <select
                  value={rmcGrade}
                  onChange={(event) => {
                    setRmcGrade(event.target.value);
                    resetCopyStatus();
                  }}
                  className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-950 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/30"
                >
                  {rmcGrades.map((grade) => (
                    <option key={grade} value={grade}>
                      {grade}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-bold text-zinc-800">
                  Allowance / Wastage (%)
                </span>

                <input
                  type="number"
                  min="0"
                  step="any"
                  value={allowance}
                  onChange={(event) => {
                    setAllowance(event.target.value);
                    resetCopyStatus();
                  }}
                  className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-950 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/30"
                />
              </label>

              <label className="block">
                <span className="text-sm font-bold text-zinc-800">
                  Transit Mixer Capacity
                </span>

                <select
                  value={mixerCapacity}
                  onChange={(event) => {
                    setMixerCapacity(event.target.value);
                    resetCopyStatus();
                  }}
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
            </div>

            <div className="mt-8 border-l-4 border-yellow-400 bg-white p-5">
              <p className="text-xs font-black uppercase tracking-wider text-zinc-500">
                Current Planning Grade
              </p>

              <p className="mt-2 text-3xl font-black text-zinc-950">
                {rmcGrade}
              </p>

              <p className="mt-2 text-sm text-zinc-600">
                Ready Mix Concrete
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 text-white shadow-xl">
          <div className="h-1 bg-yellow-400" />

          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-400">
                  Live RMC Calculation
                </p>

                <h2 className="mt-3 text-2xl font-black">
                  RMC Order Summary
                </h2>

                <p className="mt-2 text-sm text-zinc-400">
                  {rmcGrade} Ready Mix Concrete
                </p>
              </div>

              <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-black text-yellow-400">
                {items.length} POUR ITEM
                {items.length !== 1 ? "S" : ""}
              </span>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <ResultCard
                label="Total Net Volume"
                value={`${result.netVolume.toFixed(3)} m³`}
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
                value={`${result.fullLoads} + ${result.balanceVolume.toFixed(
                  2
                )} m³`}
              />
            </div>

            {result.requiredVolume > 0 ? (
              <>
                <div className="mt-6 border-l-4 border-yellow-400 bg-zinc-900 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-400">
                    Planning Summary
                  </p>

                  <p className="mt-3 text-lg leading-8 text-zinc-200">
                    Total calculated requirement is{" "}
                    <strong className="text-white">
                      {result.requiredVolume.toFixed(3)} m³
                    </strong>
                    . Suggested planning quantity is{" "}
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

                <button
                  type="button"
                  onClick={copyRmcSummary}
                  className="mt-6 w-full rounded-xl bg-yellow-400 px-6 py-4 text-sm font-black uppercase tracking-wider text-zinc-950 shadow-lg transition hover:bg-yellow-300"
                >
                  {copyStatus === "copied"
                    ? "RMC Summary Copied"
                    : copyStatus === "error"
                    ? "Copy Failed - Try Again"
                    : "Copy RMC Order Summary"}
                </button>

                {copyStatus === "copied" && (
                  <p className="mt-3 text-center text-sm font-bold text-yellow-400">
                    RMC requirement message copied to clipboard.
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
                    Add valid dimensions to your concrete pour items to
                    generate the RMC order summary.
                  </p>
                </div>
              </div>
            )}

            <p className="mt-6 text-xs leading-5 text-zinc-500">
              Verify approved grade, actual pour dimensions, deductions,
              construction joints, pour sequence, minimum dispatch quantity,
              and partial-load policy before placing the final RMC order.
            </p>
          </div>
        </div>
      </div>
    </div>
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
  unit: Unit;
  onValueChange: (value: string) => void;
  onUnitChange: (unit: Unit) => void;
}) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-zinc-800">
        {label}
      </span>

      <div className="mt-2 grid grid-cols-[1fr_75px] gap-2">
        <input
          type="number"
          min="0"
          step="any"
          value={value}
          onChange={(event) =>
            onValueChange(event.target.value)
          }
          placeholder="0"
          className="w-full min-w-0 rounded-lg border border-zinc-300 bg-stone-50 px-3 py-3 text-zinc-950 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/30"
        />

        <select
          value={unit}
          onChange={(event) =>
            onUnitChange(event.target.value as Unit)
          }
          className="w-full rounded-lg border border-zinc-300 bg-stone-50 px-2 py-3 text-sm font-bold text-zinc-950 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/30"
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