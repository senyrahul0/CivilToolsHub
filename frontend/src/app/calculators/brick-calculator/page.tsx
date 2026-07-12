import type { Metadata } from "next";

import BrickCalculator from "@/components/calculators/BrickCalculator";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Brick Calculator",
  description:
    "Calculate brick quantity, wall volume, opening deductions, wastage allowance, and approximate mortar requirement for masonry work.",
  keywords: [
    "Brick Calculator",
    "Brick Quantity Calculator",
    "Brickwork Calculator",
    "Wall Brick Calculator",
    "Masonry Calculator",
    "Brick Mortar Calculator",
    "Construction Calculator",
    "Civil Engineering Calculator",
  ],
};

export default function BrickCalculatorPage() {
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
                  Masonry Calculator
                </p>
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Brick Quantity{" "}
                <span className="text-yellow-400">
                  Calculator
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
                Calculate brick quantity, wall volume, opening
                deductions, wastage allowance, and approximate mortar
                requirement for masonry planning.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-300">
                  Brick Quantity
                </span>

                <span className="border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-300">
                  Opening Deduction
                </span>

                <span className="border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-300">
                  Mortar Estimate
                </span>

                <span className="border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-300">
                  Masonry Planning
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <BrickCalculator />

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
                How to Use the Brick Calculator
              </h2>

              <p className="mt-4 max-w-4xl leading-7 text-zinc-600">
                Use this calculator for preliminary brickwork quantity
                planning for walls and other masonry work. Enter actual
                project dimensions wherever available.
              </p>

              <ol className="mt-8 grid gap-4 text-zinc-600 md:grid-cols-2">
                <li className="border-l-4 border-yellow-400 bg-white p-5">
                  <strong className="text-zinc-950">01.</strong>{" "}
                  Enter the total wall length and wall height.
                </li>

                <li className="border-l-4 border-yellow-400 bg-white p-5">
                  <strong className="text-zinc-950">02.</strong>{" "}
                  Enter the actual masonry wall thickness used in the
                  project.
                </li>

                <li className="border-l-4 border-yellow-400 bg-white p-5">
                  <strong className="text-zinc-950">03.</strong>{" "}
                  Enter the combined door, window, and other opening
                  area for deduction.
                </li>

                <li className="border-l-4 border-yellow-400 bg-white p-5">
                  <strong className="text-zinc-950">04.</strong>{" "}
                  Select a brick-size preset or enter the actual brick
                  dimensions using Custom Brick Size.
                </li>

                <li className="border-l-4 border-yellow-400 bg-white p-5">
                  <strong className="text-zinc-950">05.</strong>{" "}
                  Set the mortar joint thickness according to the
                  masonry requirement.
                </li>

                <li className="border-l-4 border-yellow-400 bg-white p-5">
                  <strong className="text-zinc-950">06.</strong>{" "}
                  Add a suitable wastage allowance for breakage,
                  cutting, handling, and site conditions.
                </li>
              </ol>

              <div className="mt-12 grid gap-8 lg:grid-cols-2">
                <div className="bg-zinc-950 p-7 text-white">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-400">
                    Calculation Method
                  </p>

                  <h2 className="mt-3 text-2xl font-black">
                    Brick Quantity Calculation
                  </h2>

                  <div className="mt-6 space-y-4">
                    <FormulaBox>
                      Wall Volume = Net Wall Area × Wall Thickness
                    </FormulaBox>

                    <FormulaBox>
                      Nominal Brick Volume = Brick Size + Mortar Joint
                    </FormulaBox>

                    <FormulaBox>
                      Brick Quantity = Wall Volume ÷ Nominal Brick
                      Volume
                    </FormulaBox>
                  </div>

                  <p className="mt-6 text-sm leading-7 text-zinc-400">
                    The calculator uses the nominal brick dimensions
                    including the selected mortar joint to estimate
                    the number of bricks occupying the masonry volume.
                  </p>
                </div>

                <div className="border border-stone-300 bg-white p-7">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-500">
                    Opening Deduction
                  </p>

                  <h2 className="mt-3 text-2xl font-black text-zinc-950">
                    Door & Window Area
                  </h2>

                  <p className="mt-5 leading-7 text-zinc-600">
                    Door, window, ventilation, and other opening areas
                    can be deducted from the gross wall area before
                    calculating the masonry volume.
                  </p>

                  <div className="mt-6 border-l-4 border-yellow-400 bg-stone-100 p-5">
                    <p className="font-mono text-sm font-black text-zinc-950">
                      Net Wall Area = Gross Wall Area − Opening Area
                    </p>
                  </div>

                  <p className="mt-5 leading-7 text-zinc-600">
                    For multiple openings, calculate the combined
                    opening area and enter the total deduction in the
                    calculator.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <div className="border border-stone-300 bg-white p-7">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-500">
                    Brick Size Reference
                  </p>

                  <h3 className="mt-3 text-2xl font-black text-zinc-950">
                    Brick Size Presets
                  </h3>

                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b-2 border-zinc-950">
                          <th className="px-3 py-3 font-black text-zinc-950">
                            Brick Type
                          </th>

                          <th className="px-3 py-3 font-black text-zinc-950">
                            Size
                          </th>
                        </tr>
                      </thead>

                      <tbody className="text-zinc-600">
                        <BrickTableRow
                          brickType="Modular Brick"
                          size="190 × 90 × 90 mm"
                        />

                        <BrickTableRow
                          brickType="Traditional Brick"
                          size="230 × 110 × 75 mm"
                        />

                        <BrickTableRow
                          brickType="Custom Brick"
                          size="User-defined dimensions"
                        />
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 border-l-4 border-yellow-400 bg-yellow-50 p-5">
                    <p className="text-sm leading-6 text-zinc-700">
                      Brick dimensions may vary by manufacturer,
                      location, project specification, and masonry
                      material. Measure the actual brick where accurate
                      quantity planning is required.
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-400 p-7">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-700">
                    Mortar Estimate
                  </p>

                  <h3 className="mt-3 text-2xl font-black text-zinc-950">
                    Wet & Dry Mortar Volume
                  </h3>

                  <p className="mt-5 leading-7 text-zinc-800">
                    The calculator estimates wet mortar volume as the
                    difference between the net masonry volume and the
                    calculated actual brick volume.
                  </p>

                  <div className="mt-6 bg-zinc-950 p-5 text-white">
                    <p className="font-mono text-sm font-black text-yellow-400">
                      Dry Mortar ≈ Wet Mortar × 1.33
                    </p>

                    <p className="mt-4 text-sm leading-6 text-zinc-300">
                      The dry-volume conversion is a preliminary
                      planning factor. Actual mortar material
                      requirements depend on mix proportion, sand
                      properties, bulking, workmanship, and project
                      specifications.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-l-4 border-yellow-400 bg-yellow-50 p-6">
                <p className="text-sm leading-7 text-zinc-800">
                  <strong className="text-zinc-950">
                    Engineering Note:
                  </strong>{" "}
                  Brick and mortar quantities generated by this
                  calculator are preliminary planning estimates. Final
                  quantities should be checked against approved
                  architectural and masonry drawings, actual brick
                  dimensions, wall thickness, mortar joint thickness,
                  bond pattern, openings, site wastage, and project
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

function BrickTableRow({
  brickType,
  size,
}: {
  brickType: string;
  size: string;
}) {
  return (
    <tr className="border-b border-stone-200">
      <td className="px-3 py-3 font-bold text-zinc-950">
        {brickType}
      </td>

      <td className="px-3 py-3">{size}</td>
    </tr>
  );
}