import type { Metadata } from "next";

import PlasterCalculator from "@/components/calculators/PlasterCalculator";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Plaster Calculator",
  description:
    "Calculate plaster area, wet and dry mortar volume, cement bags, and sand quantity for wall plaster work.",
  keywords: [
    "Plaster Calculator",
    "Plaster Material Calculator",
    "Cement Sand Calculator",
    "Wall Plaster Calculator",
    "Plaster Cement Calculator",
    "Plaster Sand Calculator",
    "Construction Calculator",
    "Civil Engineering Calculator",
  ],
};

export default function PlasterCalculatorPage() {
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
                  Finishing Work Calculator
                </p>
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Plaster Material{" "}
                <span className="text-yellow-400">
                  Calculator
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
                Calculate plaster area, mortar volume, cement
                requirement, and sand quantity for wall plaster
                planning and preliminary material estimation.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-300">
                  Plaster Area
                </span>

                <span className="border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-300">
                  Cement Bags
                </span>

                <span className="border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-300">
                  Sand Quantity
                </span>

                <span className="border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-300">
                  Mortar Planning
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <PlasterCalculator />

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
                How to Use the Plaster Calculator
              </h2>

              <p className="mt-4 max-w-4xl leading-7 text-zinc-600">
                Use this calculator for preliminary cement and sand
                quantity planning for internal or external wall
                plaster work.
              </p>

              <ol className="mt-8 grid gap-4 text-zinc-600 md:grid-cols-2">
                <li className="border-l-4 border-yellow-400 bg-white p-5">
                  <strong className="text-zinc-950">01.</strong>{" "}
                  Enter the total wall length and wall height.
                </li>

                <li className="border-l-4 border-yellow-400 bg-white p-5">
                  <strong className="text-zinc-950">02.</strong>{" "}
                  Enter the combined door, window, ventilation, and
                  other opening area for deduction.
                </li>

                <li className="border-l-4 border-yellow-400 bg-white p-5">
                  <strong className="text-zinc-950">03.</strong>{" "}
                  Select One Side or Both Sides according to the
                  required plaster surfaces.
                </li>

                <li className="border-l-4 border-yellow-400 bg-white p-5">
                  <strong className="text-zinc-950">04.</strong>{" "}
                  Select the required plaster thickness in
                  millimetres.
                </li>

                <li className="border-l-4 border-yellow-400 bg-white p-5">
                  <strong className="text-zinc-950">05.</strong>{" "}
                  Select the cement-to-sand mortar ratio or use a
                  custom mix ratio.
                </li>

                <li className="border-l-4 border-yellow-400 bg-white p-5">
                  <strong className="text-zinc-950">06.</strong>{" "}
                  Add a suitable material wastage allowance for site
                  planning.
                </li>
              </ol>

              <div className="mt-12 grid gap-8 lg:grid-cols-2">
                <div className="bg-zinc-950 p-7 text-white">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-400">
                    Plaster Area Formula
                  </p>

                  <h2 className="mt-3 text-2xl font-black">
                    Net Plaster Area Calculation
                  </h2>

                  <div className="mt-6 space-y-4">
                    <FormulaBox>
                      Gross Wall Area = Length × Height
                    </FormulaBox>

                    <FormulaBox>
                      Net Area = Gross Area − Opening Area
                    </FormulaBox>

                    <FormulaBox>
                      Both Sides Area = Net One-Side Area × 2
                    </FormulaBox>
                  </div>

                  <p className="mt-6 text-sm leading-7 text-zinc-400">
                    When Both Sides is selected, the calculator applies
                    the opening deduction to each plaster face before
                    calculating the combined plaster area.
                  </p>
                </div>

                <div className="border border-stone-300 bg-white p-7">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-500">
                    Mortar Calculation
                  </p>

                  <h2 className="mt-3 text-2xl font-black text-zinc-950">
                    Wet & Dry Mortar Volume
                  </h2>

                  <p className="mt-5 leading-7 text-zinc-600">
                    Plaster wet mortar volume is calculated using the
                    net plaster area and selected plaster thickness.
                  </p>

                  <div className="mt-6 border-l-4 border-yellow-400 bg-stone-100 p-5">
                    <p className="font-mono text-sm font-black text-zinc-950">
                      Wet Mortar = Net Area × Plaster Thickness
                    </p>
                  </div>

                  <div className="mt-4 border-l-4 border-yellow-400 bg-stone-100 p-5">
                    <p className="font-mono text-sm font-black text-zinc-950">
                      Dry Mortar ≈ Wet Mortar × 1.33
                    </p>
                  </div>

                  <p className="mt-5 leading-7 text-zinc-600">
                    The dry-volume factor is used for preliminary
                    material planning. Actual material requirement may
                    vary with sand properties, workmanship, and site
                    conditions.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <div className="border border-stone-300 bg-white p-7">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-500">
                    Mortar Mix Reference
                  </p>

                  <h3 className="mt-3 text-2xl font-black text-zinc-950">
                    Cement : Sand Mix Ratios
                  </h3>

                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b-2 border-zinc-950">
                          <th className="px-3 py-3 font-black text-zinc-950">
                            Mix Ratio
                          </th>

                          <th className="px-3 py-3 font-black text-zinc-950">
                            Calculator Option
                          </th>
                        </tr>
                      </thead>

                      <tbody className="text-zinc-600">
                        <MixTableRow
                          ratio="1 : 3"
                          option="Available"
                        />

                        <MixTableRow
                          ratio="1 : 4"
                          option="Available"
                        />

                        <MixTableRow
                          ratio="1 : 5"
                          option="Available"
                        />

                        <MixTableRow
                          ratio="1 : 6"
                          option="Available"
                        />

                        <MixTableRow
                          ratio="Custom"
                          option="User-defined"
                        />
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 border-l-4 border-yellow-400 bg-yellow-50 p-5">
                    <p className="text-sm leading-6 text-zinc-700">
                      Select the mortar mix according to approved
                      project specifications, drawings, method
                      statements, or applicable technical
                      requirements.
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-400 p-7">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-700">
                    Cement Calculation
                  </p>

                  <h3 className="mt-3 text-2xl font-black text-zinc-950">
                    Cement Bags & Sand Quantity
                  </h3>

                  <p className="mt-5 leading-7 text-zinc-800">
                    The dry mortar volume is divided according to the
                    selected cement-to-sand ratio.
                  </p>

                  <div className="mt-6 space-y-3 bg-zinc-950 p-5 text-white">
                    <p className="font-mono text-sm font-black text-yellow-400">
                      Cement Volume = Dry Mortar × Cement Ratio Share
                    </p>

                    <p className="font-mono text-sm font-black text-yellow-400">
                      Sand Volume = Dry Mortar × Sand Ratio Share
                    </p>

                    <p className="font-mono text-sm font-black text-yellow-400">
                      Cement Weight = Cement Volume × 1440 kg/m³
                    </p>

                    <p className="font-mono text-sm font-black text-yellow-400">
                      Cement Bags = Cement Weight ÷ 50 kg
                    </p>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-zinc-800">
                    The calculator also applies the selected wastage
                    allowance to the cement and sand planning
                    quantities.
                  </p>
                </div>
              </div>

              <div className="mt-8 border-l-4 border-yellow-400 bg-yellow-50 p-6">
                <p className="text-sm leading-7 text-zinc-800">
                  <strong className="text-zinc-950">
                    Engineering Note:
                  </strong>{" "}
                  Plaster quantities generated by this calculator are
                  preliminary planning estimates. Final material
                  quantities should be checked against approved
                  drawings, actual plaster surface area, surface
                  condition, approved plaster thickness, mortar mix,
                  material properties, site wastage, and project
                  specifications before procurement or execution.
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

function FormulaBox({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="border border-zinc-800 bg-zinc-900 p-5">
      <p className="font-mono text-sm font-black text-yellow-400">
        {children}
      </p>
    </div>
  );
}

function MixTableRow({
  ratio,
  option,
}: {
  ratio: string;
  option: string;
}) {
  return (
    <tr className="border-b border-stone-200">
      <td className="px-3 py-3 font-bold text-zinc-950">
        {ratio}
      </td>

      <td className="px-3 py-3">
        {option}
      </td>
    </tr>
  );
}