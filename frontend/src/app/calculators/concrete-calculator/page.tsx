import type { Metadata } from "next";

import ConcreteCalculatorWorkspace from "@/components/calculators/ConcreteCalculatorWorkspace";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Concrete Calculator",
  description:
    "Calculate concrete volume, estimate site mix materials, and plan RMC requirements for single and multiple concrete pours.",
};

export default function ConcreteCalculatorPage() {
  return (
    <>
      <Header />

      <main className="bg-stone-100">
        <section className="border-b border-zinc-800 bg-zinc-950">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3">
                <span className="h-1 w-12 bg-yellow-400" />

                <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-400">
                  Construction Calculator
                </p>
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Concrete{" "}
                <span className="text-yellow-400">
                  Calculator
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
                Calculate concrete volume, estimate site mix materials, and
                plan ready-mix concrete requirements for single or multiple
                concrete pours.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-300">
                  RMC Planning
                </span>

                <span className="border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-300">
                  Site Mix
                </span>

                <span className="border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-300">
                  Multi-Pour
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <ConcreteCalculatorWorkspace />

          <div className="mt-16 overflow-hidden rounded-2xl border border-stone-300 bg-stone-50 shadow-sm">
            <div className="h-1 bg-yellow-400" />

            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 bg-yellow-400" />

                <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-700">
                  User Guide
                </p>
              </div>

              <h2 className="mt-4 text-3xl font-black text-zinc-950">
                How to Use the Concrete Calculator
              </h2>

              <ol className="mt-8 grid gap-4 text-zinc-600 md:grid-cols-2">
                <li className="border-l-4 border-yellow-400 bg-white p-5">
                  <strong className="text-zinc-950">01.</strong>{" "}
                  Select Single Pour or Multi-Pour RMC based on your concrete
                  planning requirement.
                </li>

                <li className="border-l-4 border-yellow-400 bg-white p-5">
                  <strong className="text-zinc-950">02.</strong>{" "}
                  Enter the concrete dimensions and select the correct unit for
                  each measurement.
                </li>

                <li className="border-l-4 border-yellow-400 bg-white p-5">
                  <strong className="text-zinc-950">03.</strong>{" "}
                  Use RMC / Ready Mix mode when planning concrete orders from a
                  batching plant.
                </li>

                <li className="border-l-4 border-yellow-400 bg-white p-5">
                  <strong className="text-zinc-950">04.</strong>{" "}
                  Use Site Mix mode to estimate cement, sand, and aggregate for
                  nominal concrete mixes.
                </li>

                <li className="border-l-4 border-yellow-400 bg-white p-5">
                  <strong className="text-zinc-950">05.</strong>{" "}
                  Set the required allowance or wastage percentage.
                </li>

                <li className="border-l-4 border-yellow-400 bg-white p-5">
                  <strong className="text-zinc-950">06.</strong>{" "}
                  Review the calculated concrete volume and RMC or material
                  requirement.
                </li>
              </ol>

              <div className="mt-12 grid gap-8 lg:grid-cols-2">
                <div className="bg-zinc-950 p-7 text-white">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-400">
                    Formula
                  </p>

                  <h2 className="mt-3 text-2xl font-black">
                    Concrete Volume Formula
                  </h2>

                  <div className="mt-6 border border-zinc-800 bg-zinc-900 p-5">
                    <p className="font-mono text-sm font-bold text-yellow-400 sm:text-base">
                      Volume = Length × Width × Depth × Quantity
                    </p>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-zinc-400">
                    Measurements are internally converted to metres before
                    concrete volume is calculated. Final volume is shown in
                    cubic metres.
                  </p>
                </div>

                <div className="border border-stone-300 bg-white p-7">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-500">
                    RMC Planning
                  </p>

                  <h2 className="mt-3 text-2xl font-black text-zinc-950">
                    Ready Mix Order Estimation
                  </h2>

                  <p className="mt-5 leading-7 text-zinc-600">
                    RMC planning calculates net concrete volume, applies the
                    selected allowance percentage, and estimates the total
                    ready-mix concrete requirement.
                  </p>

                  <p className="mt-4 leading-7 text-zinc-600">
                    Multi-Pour mode combines slabs, beams, columns, walls,
                    staircases, and other concrete items into one planning
                    summary.
                  </p>
                </div>
              </div>

              <div className="mt-8 border-l-4 border-yellow-400 bg-yellow-50 p-6">
                <p className="text-sm leading-7 text-zinc-800">
                  <strong className="text-zinc-950">
                    Engineering Note:
                  </strong>{" "}
                  All quantities shown by this calculator are planning
                  estimates. Final concrete quantities, approved RMC grades,
                  structural requirements, deductions, construction joints,
                  pour sequences, project specifications, and actual site
                  conditions should be verified before execution or placing an
                  RMC order.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}