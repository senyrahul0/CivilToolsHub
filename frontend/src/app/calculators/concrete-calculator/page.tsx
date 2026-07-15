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

      <main className="w-full overflow-x-hidden bg-stone-100">
        <section className="w-full overflow-hidden border-b border-zinc-800 bg-zinc-950">
          <div className="mx-auto w-full max-w-7xl px-3 py-12 min-[360px]:px-4 sm:px-6 sm:py-16 lg:px-8">
            <div className="min-w-0 max-w-4xl">
              <div className="flex min-w-0 items-center gap-3">
                <span className="h-1 w-8 shrink-0 bg-yellow-400 sm:w-12" />

                <p className="min-w-0 text-[10px] font-black uppercase leading-5 tracking-[0.12em] text-yellow-400 min-[360px]:text-xs sm:text-sm sm:tracking-[0.2em]">
                  Construction Calculator
                </p>
              </div>

              <h1 className="mt-5 text-4xl font-black leading-[1.08] tracking-tight text-white sm:mt-6 sm:text-5xl lg:text-6xl">
                Concrete{" "}
                <span className="text-yellow-400">
                  Calculator
                </span>
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-400 sm:mt-6 sm:text-lg sm:leading-8">
                Calculate concrete volume, estimate site mix
                materials, and plan ready-mix concrete requirements
                for single or multiple concrete pours.
              </p>

              <div className="mt-7 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
                <span className="border border-zinc-700 bg-zinc-900 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-zinc-300 sm:px-4 sm:text-xs">
                  RMC Planning
                </span>

                <span className="border border-zinc-700 bg-zinc-900 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-zinc-300 sm:px-4 sm:text-xs">
                  Site Mix
                </span>

                <span className="border border-zinc-700 bg-zinc-900 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-zinc-300 sm:px-4 sm:text-xs">
                  Multi-Pour
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-3 py-8 min-[360px]:px-4 sm:px-6 sm:py-12 lg:px-8">
          <div className="min-w-0">
            <ConcreteCalculatorWorkspace />
          </div>

          <div className="mt-10 w-full min-w-0 overflow-hidden rounded-xl border border-stone-300 bg-stone-50 shadow-sm sm:mt-16 sm:rounded-2xl">
            <div className="h-1 w-full bg-yellow-400" />

            <div className="min-w-0 p-4 min-[360px]:p-5 sm:p-8 lg:p-10">
              <div className="flex min-w-0 items-center gap-3">
                <span className="h-3 w-3 shrink-0 bg-yellow-400" />

                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-zinc-700 sm:text-xs sm:tracking-[0.18em]">
                  User Guide
                </p>
              </div>

              <h2 className="mt-4 text-2xl font-black leading-tight text-zinc-950 sm:text-3xl">
                How to Use the Concrete Calculator
              </h2>

              <ol className="mt-6 grid grid-cols-1 gap-3 text-sm leading-7 text-zinc-600 sm:mt-8 sm:gap-4 sm:text-base md:grid-cols-2">
                <li className="min-w-0 border-l-4 border-yellow-400 bg-white p-4 sm:p-5">
                  <strong className="text-zinc-950">
                    01.
                  </strong>{" "}
                  Select Single Pour or Multi-Pour RMC based on your
                  concrete planning requirement.
                </li>

                <li className="min-w-0 border-l-4 border-yellow-400 bg-white p-4 sm:p-5">
                  <strong className="text-zinc-950">
                    02.
                  </strong>{" "}
                  Enter the concrete dimensions and select the correct
                  unit for each measurement.
                </li>

                <li className="min-w-0 border-l-4 border-yellow-400 bg-white p-4 sm:p-5">
                  <strong className="text-zinc-950">
                    03.
                  </strong>{" "}
                  Use RMC / Ready Mix mode when planning concrete
                  orders from a batching plant.
                </li>

                <li className="min-w-0 border-l-4 border-yellow-400 bg-white p-4 sm:p-5">
                  <strong className="text-zinc-950">
                    04.
                  </strong>{" "}
                  Use Site Mix mode to estimate cement, sand, and
                  aggregate for nominal concrete mixes.
                </li>

                <li className="min-w-0 border-l-4 border-yellow-400 bg-white p-4 sm:p-5">
                  <strong className="text-zinc-950">
                    05.
                  </strong>{" "}
                  Set the required allowance or wastage percentage.
                </li>

                <li className="min-w-0 border-l-4 border-yellow-400 bg-white p-4 sm:p-5">
                  <strong className="text-zinc-950">
                    06.
                  </strong>{" "}
                  Review the calculated concrete volume and RMC or
                  material requirement.
                </li>
              </ol>

              <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-8 lg:grid-cols-2">
                <div className="min-w-0 bg-zinc-950 p-5 text-white sm:p-7">
                  <p className="text-[10px] font-black uppercase tracking-[0.14em] text-yellow-400 sm:text-xs sm:tracking-[0.18em]">
                    Formula
                  </p>

                  <h2 className="mt-3 text-xl font-black leading-tight sm:text-2xl">
                    Concrete Volume Formula
                  </h2>

                  <div className="mt-5 min-w-0 overflow-x-auto border border-zinc-800 bg-zinc-900 p-4 sm:mt-6 sm:p-5">
                    <p className="min-w-max font-mono text-xs font-bold text-yellow-400 min-[360px]:text-sm sm:text-base">
                      Volume = Length × Width × Depth × Quantity
                    </p>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-zinc-400">
                    Measurements are internally converted to metres
                    before concrete volume is calculated. Final volume
                    is shown in cubic metres.
                  </p>
                </div>

                <div className="min-w-0 border border-stone-300 bg-white p-5 sm:p-7">
                  <p className="text-[10px] font-black uppercase tracking-[0.14em] text-zinc-500 sm:text-xs sm:tracking-[0.18em]">
                    RMC Planning
                  </p>

                  <h2 className="mt-3 text-xl font-black leading-tight text-zinc-950 sm:text-2xl">
                    Ready Mix Order Estimation
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-zinc-600 sm:text-base">
                    RMC planning calculates net concrete volume,
                    applies the selected allowance percentage, and
                    estimates the total ready-mix concrete
                    requirement.
                  </p>

                  <p className="mt-4 text-sm leading-7 text-zinc-600 sm:text-base">
                    Multi-Pour mode combines slabs, beams, columns,
                    walls, staircases, and other concrete items into
                    one planning summary.
                  </p>
                </div>
              </div>

              <div className="mt-6 min-w-0 border-l-4 border-yellow-400 bg-yellow-50 p-4 sm:mt-8 sm:p-6">
                <p className="text-sm leading-7 text-zinc-800">
                  <strong className="text-zinc-950">
                    Engineering Note:
                  </strong>{" "}
                  All quantities shown by this calculator are planning
                  estimates. Final concrete quantities, approved RMC
                  grades, structural requirements, deductions,
                  construction joints, pour sequences, project
                  specifications, and actual site conditions should be
                  verified before execution or placing an RMC order.
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