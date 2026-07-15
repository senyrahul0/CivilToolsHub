"use client";

import { useState } from "react";

import ConcreteCalculator from "@/components/calculators/ConcreteCalculator";
import MultiPourRmcCalculator from "@/components/calculators/MultiPourRmcCalculator";

type CalculatorMode = "single" | "multi";

export default function ConcreteCalculatorWorkspace() {
  const [calculatorMode, setCalculatorMode] =
    useState<CalculatorMode>("single");

  return (
    <div className="w-full min-w-0">
      <div className="mb-6 w-full min-w-0 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-xl sm:mb-8 sm:rounded-2xl">
        <div className="h-1 w-full bg-yellow-400" />

        <div className="min-w-0 p-4 min-[360px]:p-5 sm:p-6">
          <div className="flex min-w-0 flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div className="min-w-0">
              <div className="flex min-w-0 items-center gap-3">
                <span className="h-2.5 w-2.5 shrink-0 bg-yellow-400" />

                <p className="min-w-0 text-[10px] font-black uppercase leading-5 tracking-[0.14em] text-yellow-400 min-[360px]:text-xs sm:text-sm sm:tracking-[0.2em]">
                  Concrete Planning Mode
                </p>
              </div>

              <h2 className="mt-3 text-xl font-black leading-tight text-white min-[360px]:text-2xl">
                Select Your Calculation Method
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">
                Use Single Pour for one concrete area or Multi-Pour
                to combine slabs, beams, columns, walls, staircases,
                and other concrete items.
              </p>
            </div>

            <div
              className="grid w-full min-w-0 grid-cols-1 gap-1 rounded-xl border border-zinc-700 bg-zinc-900 p-1 min-[420px]:grid-cols-2 lg:min-w-[380px] lg:max-w-[420px]"
              role="tablist"
              aria-label="Concrete calculation mode"
            >
              <button
                type="button"
                role="tab"
                aria-selected={calculatorMode === "single"}
                onClick={() => setCalculatorMode("single")}
                className={`flex min-h-12 w-full cursor-pointer items-center justify-center rounded-lg px-3 py-3 text-center text-sm font-black transition focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${
                  calculatorMode === "single"
                    ? "bg-yellow-400 text-zinc-950 shadow-lg"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-yellow-400"
                }`}
              >
                Single Pour
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={calculatorMode === "multi"}
                onClick={() => setCalculatorMode("multi")}
                className={`flex min-h-12 w-full cursor-pointer items-center justify-center rounded-lg px-3 py-3 text-center text-sm font-black transition focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${
                  calculatorMode === "multi"
                    ? "bg-yellow-400 text-zinc-950 shadow-lg"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-yellow-400"
                }`}
              >
                Multi-Pour RMC
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full min-w-0">
        {calculatorMode === "single" ? (
          <ConcreteCalculator />
        ) : (
          <MultiPourRmcCalculator />
        )}
      </div>
    </div>
  );
}