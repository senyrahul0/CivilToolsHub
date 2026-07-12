"use client";

import { useMemo, useState } from "react";

type LengthUnit = "m" | "ft" | "mm";

type SteelBarItem = {
  id: number;
  name: string;
  diameter: string;
  customDiameter: string;
  length: string;
  lengthUnit: LengthUnit;
  quantity: string;
};

const standardDiameters = [
  "6",
  "8",
  "10",
  "12",
  "16",
  "20",
  "25",
  "28",
  "32",
  "36",
  "40",
];

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

function createSteelItem(id: number): SteelBarItem {
  return {
    id,
    name: `Bar Item ${id}`,
    diameter: "12",
    customDiameter: "",
    length: "",
    lengthUnit: "m",
    quantity: "1",
  };
}

export default function SteelWeightCalculator() {
  const [items, setItems] = useState<SteelBarItem[]>([
    createSteelItem(1),
  ]);

  const [nextId, setNextId] = useState(2);
  const [copyStatus, setCopyStatus] = useState<
    "idle" | "copied" | "error"
  >("idle");

  function resetCopyStatus() {
    setCopyStatus("idle");
  }

  function addItem() {
    setItems((currentItems) => [
      ...currentItems,
      createSteelItem(nextId),
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

  function updateItem<K extends keyof SteelBarItem>(
    id: number,
    field: K,
    value: SteelBarItem[K]
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
      const diameter =
        item.diameter === "custom"
          ? Number(item.customDiameter)
          : Number(item.diameter);

      const rawLength = Number(item.length);
      const quantity = Number(item.quantity);

      if (
        diameter <= 0 ||
        rawLength <= 0 ||
        quantity <= 0
      ) {
        return {
          id: item.id,
          name: item.name,
          diameter,
          lengthMetres: 0,
          quantity,
          unitWeight: 0,
          totalLength: 0,
          totalWeight: 0,
          twelveMetreBars: 0,
        };
      }

      const lengthMetres = convertToMetres(
        rawLength,
        item.lengthUnit
      );

      const unitWeight = (diameter * diameter) / 162;

      const totalLength = lengthMetres * quantity;

      const totalWeight = unitWeight * totalLength;

      const twelveMetreBars = Math.ceil(
        totalLength / 12
      );

      return {
        id: item.id,
        name: item.name,
        diameter,
        lengthMetres,
        quantity,
        unitWeight,
        totalLength,
        totalWeight,
        twelveMetreBars,
      };
    });

    const totalLength = calculatedItems.reduce(
      (total, item) => total + item.totalLength,
      0
    );

    const totalWeight = calculatedItems.reduce(
      (total, item) => total + item.totalWeight,
      0
    );

    const totalTwelveMetreBars =
      calculatedItems.reduce(
        (total, item) => total + item.twelveMetreBars,
        0
      );

    return {
      calculatedItems,
      totalLength,
      totalWeight,
      totalWeightTonnes: totalWeight / 1000,
      totalTwelveMetreBars,
    };
  }, [items]);

  async function copySteelSummary() {
    if (result.totalWeight <= 0) {
      return;
    }

    const validItems = result.calculatedItems.filter(
      (item) => item.totalWeight > 0
    );

    const itemSummary = validItems
      .map(
        (item, index) =>
          `${index + 1}. ${item.name || `Bar Item ${index + 1}`}\n` +
          `Diameter: ${item.diameter} mm\n` +
          `Unit Weight: ${item.unitWeight.toFixed(3)} kg/m\n` +
          `Total Length: ${item.totalLength.toFixed(2)} m\n` +
          `Quantity: ${item.quantity}\n` +
          `Steel Weight: ${item.totalWeight.toFixed(2)} kg`
      )
      .join("\n\n");

    const message = `STEEL WEIGHT REQUIREMENT

BAR DETAILS

${itemSummary}

STEEL SUMMARY

Total Bar Length: ${result.totalLength.toFixed(2)} m
Total Steel Weight: ${result.totalWeight.toFixed(2)} kg
Total Steel Weight: ${result.totalWeightTonnes.toFixed(3)} MT
Approx. 12 m Bar Requirement: ${result.totalTwelveMetreBars} Nos.

Note: Steel quantities are planning estimates. Verify bar bending schedule, cutting length, lap length, development length, hooks, bends, wastage, and approved structural drawings before procurement or execution.`;

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
                  Reinforcement Planning
                </p>
              </div>

              <h2 className="mt-3 text-3xl font-black text-zinc-950">
                Steel Weight Calculator
              </h2>

              <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-600">
                Calculate reinforcement bar unit weight, total bar length,
                steel weight, and approximate 12 metre bar requirement.
              </p>
            </div>

            <button
              type="button"
              onClick={addItem}
              className="shrink-0 rounded-lg bg-yellow-400 px-5 py-3 text-sm font-black text-zinc-950 shadow-md transition hover:bg-yellow-300"
            >
              + Add Bar Item
            </button>
          </div>

          <div className="mt-8 space-y-6">
            {items.map((item, index) => {
              const calculatedItem =
                result.calculatedItems.find(
                  (resultItem) =>
                    resultItem.id === item.id
                );

              return (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-2xl border border-zinc-300 bg-white shadow-sm"
                >
                  <div className="flex flex-col gap-4 bg-zinc-950 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <span className="flex h-10 w-10 items-center justify-center bg-yellow-400 text-sm font-black text-zinc-950">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-yellow-400">
                          Reinforcement Bar Item
                        </p>

                        <h3 className="mt-1 text-lg font-black text-white">
                          {item.name ||
                            `Bar Item ${index + 1}`}
                        </h3>
                      </div>
                    </div>

                    {items.length > 1 && (
                      <button
                        type="button"
                        onClick={() =>
                          removeItem(item.id)
                        }
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
                          Bar Item Name
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
                          placeholder="Example: Slab Main Bar"
                          className="mt-2 w-full rounded-lg border border-zinc-300 bg-stone-50 px-4 py-3 text-zinc-950 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/30"
                        />
                      </label>

                      <label className="block">
                        <span className="text-sm font-bold text-zinc-800">
                          Bar Diameter
                        </span>

                        <select
                          value={item.diameter}
                          onChange={(event) =>
                            updateItem(
                              item.id,
                              "diameter",
                              event.target.value
                            )
                          }
                          className="mt-2 w-full rounded-lg border border-zinc-300 bg-stone-50 px-4 py-3 text-zinc-950 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/30"
                        >
                          {standardDiameters.map(
                            (diameter) => (
                              <option
                                key={diameter}
                                value={diameter}
                              >
                                {diameter} mm
                              </option>
                            )
                          )}

                          <option value="custom">
                            Custom Diameter
                          </option>
                        </select>
                      </label>
                    </div>

                    {item.diameter === "custom" && (
                      <label className="mt-5 block">
                        <span className="text-sm font-bold text-zinc-800">
                          Custom Bar Diameter (mm)
                        </span>

                        <input
                          type="number"
                          min="0"
                          step="any"
                          value={item.customDiameter}
                          onChange={(event) =>
                            updateItem(
                              item.id,
                              "customDiameter",
                              event.target.value
                            )
                          }
                          placeholder="Example: 14"
                          className="mt-2 w-full rounded-lg border border-zinc-300 bg-stone-50 px-4 py-3 text-zinc-950 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/30"
                        />
                      </label>
                    )}

                    <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      <label className="block">
                        <span className="text-sm font-bold text-zinc-800">
                          Length of One Bar
                        </span>

                        <div className="mt-2 grid grid-cols-[1fr_80px] gap-2">
                          <input
                            type="number"
                            min="0"
                            step="any"
                            value={item.length}
                            onChange={(event) =>
                              updateItem(
                                item.id,
                                "length",
                                event.target.value
                              )
                            }
                            placeholder="Example: 12"
                            className="w-full min-w-0 rounded-lg border border-zinc-300 bg-stone-50 px-4 py-3 text-zinc-950 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/30"
                          />

                          <select
                            value={item.lengthUnit}
                            onChange={(event) =>
                              updateItem(
                                item.id,
                                "lengthUnit",
                                event.target
                                  .value as LengthUnit
                              )
                            }
                            className="w-full rounded-lg border border-zinc-300 bg-stone-50 px-2 py-3 text-sm font-bold text-zinc-950 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/30"
                          >
                            {Object.entries(
                              unitLabels
                            ).map(
                              ([
                                unitValue,
                                unitLabel,
                              ]) => (
                                <option
                                  key={unitValue}
                                  value={unitValue}
                                >
                                  {unitLabel}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                      </label>

                      <label className="block">
                        <span className="text-sm font-bold text-zinc-800">
                          Number of Bars
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

                      <div className="border-l-4 border-yellow-400 bg-stone-100 p-5">
                        <p className="text-xs font-black uppercase tracking-wider text-zinc-500">
                          Unit Weight
                        </p>

                        <p className="mt-2 text-2xl font-black text-zinc-950">
                          {calculatedItem?.unitWeight.toFixed(
                            3
                          ) ?? "0.000"}{" "}
                          kg/m
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                      <ItemResult
                        label="Total Bar Length"
                        value={`${(
                          calculatedItem?.totalLength ?? 0
                        ).toFixed(2)} m`}
                      />

                      <ItemResult
                        label="Steel Weight"
                        value={`${(
                          calculatedItem?.totalWeight ?? 0
                        ).toFixed(2)} kg`}
                        highlight
                      />

                      <ItemResult
                        label="Approx. 12 m Bars"
                        value={`${
                          calculatedItem?.twelveMetreBars ??
                          0
                        } Nos.`}
                      />
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
            + Add Another Reinforcement Bar Item
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 text-white shadow-xl">
        <div className="h-1 bg-yellow-400" />

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-400">
                Live Steel Calculation
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Steel Weight Summary
              </h2>

              <p className="mt-2 text-sm text-zinc-400">
                Combined reinforcement steel requirement
              </p>
            </div>

            <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-black text-yellow-400">
              {items.length} BAR ITEM
              {items.length !== 1 ? "S" : ""}
            </span>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ResultCard
              label="Total Bar Length"
              value={`${result.totalLength.toFixed(2)} m`}
            />

            <ResultCard
              label="Total Steel Weight"
              value={`${result.totalWeight.toFixed(2)} kg`}
            />

            <ResultCard
              label="Steel Weight in MT"
              value={`${result.totalWeightTonnes.toFixed(
                3
              )} MT`}
              highlight
            />

            <ResultCard
              label="Approx. 12 m Bars"
              value={`${result.totalTwelveMetreBars} Nos.`}
            />
          </div>

          {result.totalWeight > 0 ? (
            <>
              <div className="mt-6 border-l-4 border-yellow-400 bg-zinc-900 p-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-400">
                  Steel Planning Summary
                </p>

                <p className="mt-3 text-lg leading-8 text-zinc-200">
                  Total calculated reinforcement requirement
                  is{" "}
                  <strong className="text-yellow-400">
                    {result.totalWeight.toFixed(2)} kg
                  </strong>{" "}
                  or approximately{" "}
                  <strong className="text-white">
                    {result.totalWeightTonnes.toFixed(3)} MT
                  </strong>
                  .
                </p>
              </div>

              <button
                type="button"
                onClick={copySteelSummary}
                className="mt-6 w-full rounded-xl bg-yellow-400 px-6 py-4 text-sm font-black uppercase tracking-wider text-zinc-950 shadow-lg transition hover:bg-yellow-300"
              >
                {copyStatus === "copied"
                  ? "Steel Summary Copied"
                  : copyStatus === "error"
                  ? "Copy Failed - Try Again"
                  : "Copy Steel Weight Summary"}
              </button>

              {copyStatus === "copied" && (
                <p className="mt-3 text-center text-sm font-bold text-yellow-400">
                  Steel requirement message copied to
                  clipboard.
                </p>
              )}

              {copyStatus === "error" && (
                <p className="mt-3 text-center text-sm font-bold text-red-400">
                  Unable to copy the message. Please try
                  again.
                </p>
              )}
            </>
          ) : (
            <div className="mt-6 border border-zinc-800 bg-zinc-900 p-5">
              <div className="flex items-start gap-4">
                <span className="mt-1 h-3 w-3 shrink-0 bg-yellow-400" />

                <p className="text-sm leading-6 text-zinc-400">
                  Enter valid bar diameter, length, and
                  quantity to calculate the reinforcement steel
                  requirement.
                </p>
              </div>
            </div>
          )}

          <p className="mt-6 text-xs leading-5 text-zinc-500">
            The standard D²/162 formula is used for
            reinforcement bar unit-weight estimation. Verify
            BBS cutting length, lap length, development length,
            hooks, bends, wastage, approved structural drawings,
            and project specifications before procurement or
            execution.
          </p>
        </div>
      </div>
    </div>
  );
}

function ItemResult({
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
      className={`border p-5 ${
        highlight
          ? "border-yellow-400 bg-yellow-50"
          : "border-stone-300 bg-stone-100"
      }`}
    >
      <p className="text-xs font-black uppercase tracking-wider text-zinc-500">
        {label}
      </p>

      <p className="mt-2 text-xl font-black text-zinc-950">
        {value}
      </p>
    </div>
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