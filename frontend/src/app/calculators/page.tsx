import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Construction Calculators",
  description:
    "Free construction calculators for concrete, RMC planning, reinforcement steel, brickwork, and plaster material estimation.",
  keywords: [
    "Construction Calculators",
    "Civil Engineering Calculators",
    "Concrete Calculator",
    "RMC Calculator",
    "Steel Weight Calculator",
    "Brick Calculator",
    "Plaster Calculator",
    "Construction Tools",
    "Site Engineer Tools",
  ],
};

const calculators = [
  {
    number: "01",
    title: "Concrete Calculator",
    category: "Concrete",
    description:
      "Calculate concrete volume and preliminary material quantities for slabs, beams, columns, footings, and other concrete elements.",
    href: "/calculators/concrete-calculator",
    features: [
      "Concrete volume",
      "Dry volume estimate",
      "Cement quantity",
      "Sand quantity",
      "Aggregate quantity",
    ],
  },
  {
    number: "02",
    title: "RMC Planning Calculator",
    category: "RMC Planning",
    description:
      "Plan multiple concrete pours and estimate RMC order quantity and transit mixer requirements for site execution.",
    href: "/calculators/concrete-calculator",
    features: [
      "Multi-pour planning",
      "RMC quantity",
      "Wastage allowance",
      "Transit mixer loads",
      "Copy planning summary",
    ],
  },
  {
    number: "03",
    title: "Steel Weight Calculator",
    category: "Reinforcement",
    description:
      "Calculate reinforcement bar unit weight, total bar length, steel quantity, and approximate stock-bar requirements.",
    href: "/calculators/steel-weight-calculator",
    features: [
      "D² / 162 formula",
      "Multiple bar items",
      "Steel weight in kg",
      "Steel quantity in MT",
      "12 m bar estimate",
    ],
  },
  {
    number: "04",
    title: "Brick Calculator",
    category: "Masonry",
    description:
      "Calculate brick quantity, wall volume, opening deductions, wastage allowance, and preliminary mortar requirement.",
    href: "/calculators/brick-calculator",
    features: [
      "Wall volume",
      "Opening deduction",
      "Custom brick size",
      "Brick wastage",
      "Mortar estimate",
    ],
  },
  {
    number: "05",
    title: "Plaster Calculator",
    category: "Finishing",
    description:
      "Calculate plaster area, mortar volume, cement bags, and sand quantity for wall finishing work.",
    href: "/calculators/plaster-calculator",
    features: [
      "One or both sides",
      "Opening deduction",
      "Plaster thickness",
      "Custom mix ratio",
      "Cement and sand planning",
    ],
  },
];

export default function CalculatorsPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-stone-100">
        <section className="border-b border-zinc-800 bg-zinc-950">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3">
                <span className="h-1 w-12 bg-yellow-400" />

                <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-400">
                  CivilToolsHub Calculator Library
                </p>
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Construction{" "}
                <span className="text-yellow-400">
                  Calculators
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
                Practical construction calculators for quantity
                planning, preliminary material estimation, and
                day-to-day site engineering work.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Tag>Concrete</Tag>
                <Tag>RMC</Tag>
                <Tag>Reinforcement</Tag>
                <Tag>Masonry</Tag>
                <Tag>Finishing</Tag>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 border-b border-stone-300 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
                Available Tools
              </p>

              <h2 className="mt-3 text-3xl font-black text-zinc-950">
                Select a Calculator
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-zinc-600">
                Choose a construction calculator based on the work
                activity or material you need to estimate.
              </p>
            </div>

            <div className="w-fit bg-yellow-400 px-5 py-4">
              <p className="text-xs font-black uppercase tracking-wider text-zinc-700">
                Live Calculators
              </p>

              <p className="mt-1 text-3xl font-black text-zinc-950">
                {calculators.length}
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {calculators.map((calculator) => (
              <Link
                key={calculator.title}
                href={calculator.href}
                className="group block"
              >
                <article className="relative flex h-full flex-col overflow-hidden border border-stone-300 bg-white shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:border-yellow-500 group-hover:shadow-xl">
                  <div className="h-1 bg-yellow-400" />

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-12 w-12 items-center justify-center bg-zinc-950 text-sm font-black text-yellow-400">
                        {calculator.number}
                      </span>

                      <span className="bg-yellow-400 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-zinc-950">
                        Live
                      </span>
                    </div>

                    <p className="mt-7 text-xs font-black uppercase tracking-[0.18em] text-yellow-600">
                      {calculator.category}
                    </p>

                    <h2 className="mt-3 text-2xl font-black text-zinc-950">
                      {calculator.title}
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-zinc-600">
                      {calculator.description}
                    </p>

                    <div className="mt-6 border-t border-stone-200 pt-5">
                      <p className="text-xs font-black uppercase tracking-wider text-zinc-500">
                        Calculator Features
                      </p>

                      <ul className="mt-4 space-y-3">
                        {calculator.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-sm text-zinc-700"
                          >
                            <span className="mt-1.5 h-2 w-2 shrink-0 bg-yellow-400" />

                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-7">
                      <div className="flex items-center justify-between border-t border-stone-200 pt-5">
                        <span className="text-sm font-black text-zinc-950">
                          Open Calculator
                        </span>

                        <span className="flex h-10 w-10 items-center justify-center bg-zinc-950 text-lg font-black text-yellow-400 transition group-hover:bg-yellow-400 group-hover:text-zinc-950">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-16 overflow-hidden bg-zinc-950 text-white">
            <div className="h-1 bg-yellow-400" />

            <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400">
                  Construction Tool Library
                </p>

                <h2 className="mt-4 text-3xl font-black">
                  More Site Tools Are Under Development
                </h2>

                <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
                  CivilToolsHub is being expanded with practical
                  calculators and digital tools for construction
                  quantity planning, safety, execution, and site
                  reporting.
                </p>
              </div>

              <div className="border border-zinc-800 bg-zinc-900 px-6 py-5">
                <p className="text-xs font-black uppercase tracking-wider text-zinc-500">
                  Current Library
                </p>

                <p className="mt-2 text-3xl font-black text-yellow-400">
                  {calculators.length} Live Tools
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-l-4 border-yellow-400 bg-yellow-50 p-6">
            <p className="text-sm leading-7 text-zinc-800">
              <strong className="text-zinc-950">
                Engineering Note:
              </strong>{" "}
              Calculator results are intended for preliminary
              construction planning and estimation. Final quantities
              and execution requirements should be verified against
              approved drawings, project specifications, applicable
              codes, manufacturer data, and actual site conditions.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function Tag({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-300">
      {children}
    </span>
  );
}