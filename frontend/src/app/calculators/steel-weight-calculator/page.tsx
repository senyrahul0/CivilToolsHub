import type { Metadata } from "next";

import SteelWeightCalculator from "@/components/calculators/SteelWeightCalculator";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Steel Weight Calculator",
  description:
    "Calculate reinforcement steel bar weight, unit weight, total bar length, steel quantity in kilograms and metric tonnes.",
  keywords: [
    "Steel Weight Calculator",
    "Rebar Weight Calculator",
    "Steel Bar Weight Calculator",
    "TMT Bar Weight Calculator",
    "Reinforcement Steel Calculator",
    "D2 162 Formula",
    "Civil Engineering Calculator",
    "Construction Calculator",
  ],
};

export default function SteelWeightCalculatorPage() {
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
                  Reinforcement Calculator
                </p>
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Steel Weight{" "}
                <span className="text-yellow-400">
                  Calculator
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
                Calculate reinforcement bar unit weight, total steel
                quantity, bar length, and approximate 12 metre bar
                requirement for construction planning.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-300">
                  Rebar Weight
                </span>

                <span className="border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-300">
                  D² / 162
                </span>

                <span className="border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-300">
                  Multi-Bar
                </span>

                <span className="border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-300">
                  Steel Planning
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <SteelWeightCalculator />

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
                How to Use the Steel Weight Calculator
              </h2>

              <p className="mt-4 max-w-4xl leading-7 text-zinc-600">
                Use this calculator to estimate reinforcement steel
                weight for slabs, beams, columns, walls, footings,
                staircases, and other RCC structural elements.
              </p>

              <ol className="mt-8 grid gap-4 text-zinc-600 md:grid-cols-2">
                <li className="border-l-4 border-yellow-400 bg-white p-5">
                  <strong className="text-zinc-950">01.</strong>{" "}
                  Enter a clear bar item name such as Slab Main Bar,
                  Beam Top Bar, Column Main Bar, or Stirrup.
                </li>

                <li className="border-l-4 border-yellow-400 bg-white p-5">
                  <strong className="text-zinc-950">02.</strong>{" "}
                  Select the reinforcement bar diameter from the
                  standard diameter list.
                </li>

                <li className="border-l-4 border-yellow-400 bg-white p-5">
                  <strong className="text-zinc-950">03.</strong>{" "}
                  Use Custom Diameter when the required bar diameter
                  is not available in the standard list.
                </li>

                <li className="border-l-4 border-yellow-400 bg-white p-5">
                  <strong className="text-zinc-950">04.</strong>{" "}
                  Enter the length of one reinforcement bar and select
                  metre, feet, or millimetre as the measurement unit.
                </li>

                <li className="border-l-4 border-yellow-400 bg-white p-5">
                  <strong className="text-zinc-950">05.</strong>{" "}
                  Enter the total number of bars required for the
                  selected reinforcement item.
                </li>

                <li className="border-l-4 border-yellow-400 bg-white p-5">
                  <strong className="text-zinc-950">06.</strong>{" "}
                  Add multiple bar items to calculate the combined
                  reinforcement steel requirement.
                </li>
              </ol>

              <div className="mt-12 grid gap-8 lg:grid-cols-2">
                <div className="bg-zinc-950 p-7 text-white">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-400">
                    Steel Formula
                  </p>

                  <h2 className="mt-3 text-2xl font-black">
                    Reinforcement Bar Unit Weight
                  </h2>

                  <div className="mt-6 border border-zinc-800 bg-zinc-900 p-5">
                    <p className="font-mono text-xl font-black text-yellow-400">
                      Weight per metre = D² / 162
                    </p>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-zinc-400">
                    D represents the nominal reinforcement bar
                    diameter in millimetres. The calculated result is
                    the approximate bar weight in kilograms per metre.
                  </p>

                  <div className="mt-6 border-l-4 border-yellow-400 bg-zinc-900 p-5">
                    <p className="text-sm font-bold text-white">
                      Example: 12 mm Bar
                    </p>

                    <p className="mt-3 font-mono text-sm text-zinc-300">
                      12 × 12 ÷ 162 = 0.889 kg/m
                    </p>
                  </div>
                </div>

                <div className="border border-stone-300 bg-white p-7">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-500">
                    Calculation Method
                  </p>

                  <h2 className="mt-3 text-2xl font-black text-zinc-950">
                    Total Steel Weight Calculation
                  </h2>

                  <p className="mt-5 leading-7 text-zinc-600">
                    The calculator first converts the entered bar
                    length into metres. It then calculates the unit
                    weight of the selected reinforcement diameter.
                  </p>

                  <div className="mt-6 border-l-4 border-yellow-400 bg-stone-100 p-5">
                    <p className="font-mono text-sm font-black text-zinc-950">
                      Total Weight = Unit Weight × Bar Length × Quantity
                    </p>
                  </div>

                  <p className="mt-5 leading-7 text-zinc-600">
                    Multiple reinforcement items are combined to show
                    total bar length, steel weight in kilograms, and
                    total steel quantity in metric tonnes.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <div className="border border-stone-300 bg-white p-6">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-500">
                    Standard Reference
                  </p>

                  <h3 className="mt-3 text-xl font-black text-zinc-950">
                    Common Rebar Unit Weights
                  </h3>

                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b-2 border-zinc-950">
                          <th className="px-3 py-3 font-black text-zinc-950">
                            Diameter
                          </th>

                          <th className="px-3 py-3 font-black text-zinc-950">
                            Approx. Weight
                          </th>
                        </tr>
                      </thead>

                      <tbody className="text-zinc-600">
                        <SteelTableRow
                          diameter="6 mm"
                          weight="0.222 kg/m"
                        />

                        <SteelTableRow
                          diameter="8 mm"
                          weight="0.395 kg/m"
                        />

                        <SteelTableRow
                          diameter="10 mm"
                          weight="0.617 kg/m"
                        />

                        <SteelTableRow
                          diameter="12 mm"
                          weight="0.889 kg/m"
                        />

                        <SteelTableRow
                          diameter="16 mm"
                          weight="1.580 kg/m"
                        />

                        <SteelTableRow
                          diameter="20 mm"
                          weight="2.469 kg/m"
                        />

                        <SteelTableRow
                          diameter="25 mm"
                          weight="3.858 kg/m"
                        />

                        <SteelTableRow
                          diameter="32 mm"
                          weight="6.321 kg/m"
                        />

                        <SteelTableRow
                          diameter="40 mm"
                          weight="9.877 kg/m"
                        />
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-yellow-400 p-7">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-700">
                    Site Planning Note
                  </p>

                  <h3 className="mt-3 text-2xl font-black text-zinc-950">
                    12 Metre Bar Requirement
                  </h3>

                  <p className="mt-5 leading-7 text-zinc-800">
                    The approximate 12 metre bar quantity shown by the
                    calculator is based on total calculated cutting
                    length divided by a 12 metre stock length.
                  </p>

                  <p className="mt-4 leading-7 text-zinc-800">
                    It is a preliminary planning estimate and does not
                    perform optimized cutting-stock or bar nesting
                    calculations.
                  </p>

                  <div className="mt-6 bg-zinc-950 p-5 text-white">
                    <p className="text-sm font-black text-yellow-400">
                      Important
                    </p>

                    <p className="mt-3 text-sm leading-6 text-zinc-300">
                      Actual procurement quantity may increase due to
                      cutting waste, lap lengths, development lengths,
                      hooks, bends, anchorage, couplers, and BBS
                      requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-l-4 border-yellow-400 bg-yellow-50 p-6">
                <p className="text-sm leading-7 text-zinc-800">
                  <strong className="text-zinc-950">
                    Engineering Note:
                  </strong>{" "}
                  Steel quantities generated by this calculator are
                  planning estimates. Final reinforcement quantities
                  should be verified using approved structural
                  drawings, bar bending schedules, project
                  specifications, relevant codes, and actual site
                  conditions before procurement or execution.
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

function SteelTableRow({
  diameter,
  weight,
}: {
  diameter: string;
  weight: string;
}) {
  return (
    <tr className="border-b border-stone-200">
      <td className="px-3 py-3 font-bold text-zinc-950">
        {diameter}
      </td>

      <td className="px-3 py-3">
        {weight}
      </td>
    </tr>
  );
}