"use client";

import { useState } from "react";

import ConcreteCalculator from "@/components/calculators/ConcreteCalculator";
import MultiPourRmcCalculator from "@/components/calculators/MultiPourRmcCalculator";

type CalculatorMode = "single" | "multi";

export default function ConcreteCalculatorWorkspace() {
  const [calculatorMode, setCalculatorMode] =
    useState<CalculatorMode>("single");

  return (
    <div>
      <div className="mb-8 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-xl">
        <div className="h-1 bg-yellow-400" />

        <div className="p-5 sm:p-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 bg-yellow-400" />

                <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400 sm:text-sm">
                  Concrete Planning Mode
                </p>
              </div>

              <h2 className="mt-3 text-2xl font-black text-white">
                Select Your Calculation Method
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">
                Use Single Pour for one concrete area or Multi-Pour to combine
                slabs, beams, columns, walls, staircases, and other concrete
                items.
              </p>
            </div>

            <div className="grid grid-cols-2 rounded-xl border border-zinc-700 bg-zinc-900 p-1 lg:min-w-[380px]">
              <button
                type="button"
                onClick={() => setCalculatorMode("single")}
                className={`rounded-lg px-5 py-3 text-sm font-black transition ${
                  calculatorMode === "single"
                    ? "bg-yellow-400 text-zinc-950 shadow-lg"
                    : "text-zinc-400 hover:text-yellow-400"
                }`}
              >
                Single Pour
              </button>

              <button
                type="button"
                onClick={() => setCalculatorMode("multi")}
                className={`rounded-lg px-5 py-3 text-sm font-black transition ${
                  calculatorMode === "multi"
                    ? "bg-yellow-400 text-zinc-950 shadow-lg"
                    : "text-zinc-400 hover:text-yellow-400"
                }`}
              >
                Multi-Pour RMC
              </button>
            </div>
          </div>
        </div>
      </div>

      {calculatorMode === "single" ? (
        <ConcreteCalculator />
      ) : (
        <MultiPourRmcCalculator />
      )}
    </div>
  );
}