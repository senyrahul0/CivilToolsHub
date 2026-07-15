import Link from "next/link";

const tools = [
  {
    title: "Concrete Calculator",
    description:
      "Calculate concrete volume, dry volume, material quantity, and RMC planning requirement.",
    category: "Concrete",
    href: "/calculators/concrete-calculator",
    status: "Live",
  },
  {
    title: "Steel Weight Calculator",
    description:
      "Calculate reinforcement bar unit weight, total steel quantity, bar length, and approximate stock requirement.",
    category: "Reinforcement",
    href: "/calculators/steel-weight-calculator",
    status: "Live",
  },
  {
    title: "Brick Calculator",
    description:
      "Calculate brick quantity, wall volume, opening deductions, wastage allowance, and approximate mortar requirement.",
    category: "Masonry",
    href: "/calculators/brick-calculator",
    status: "Live",
  },
  {
    title: "Plaster Calculator",
    description:
      "Calculate plaster area, mortar volume, cement bags, and sand quantity for finishing work planning.",
    category: "Finishing",
    href: "/calculators/plaster-calculator",
    status: "Live",
  },
  {
    title: "Safety Observation Generator",
    description:
      "Create clear and professional construction safety observations for site reporting.",
    category: "Safety",
    href: "#",
    status: "Coming Soon",
  },
  {
    title: "RMC Planning Calculator",
    description:
      "Plan multiple concrete pours, RMC quantity, transit mixer loads, and order requirements.",
    category: "RMC Planning",
    href: "/calculators/concrete-calculator",
    status: "Live",
  },
];

export default function PopularTools() {
  return (
    <section className="w-full overflow-hidden border-y border-zinc-800 bg-zinc-950">
      <div className="mx-auto w-full max-w-7xl px-3 py-12 min-[360px]:px-4 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex min-w-0 flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <div className="flex min-w-0 items-center gap-3">
              <span className="h-1 w-8 shrink-0 bg-yellow-400 sm:w-10" />

              <p className="min-w-0 text-[10px] font-black uppercase leading-5 tracking-[0.12em] text-yellow-400 min-[360px]:text-xs sm:tracking-[0.2em]">
                Construction Engineering Tools
              </p>
            </div>

            <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-white sm:mt-5 sm:text-4xl">
              Popular Construction Tools
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
              Practical calculators and site tools built for civil
              engineers, site engineers, safety professionals, and
              construction teams.
            </p>
          </div>

          <div className="w-full border border-zinc-700 bg-zinc-900 px-4 py-3 sm:w-fit sm:shrink-0">
            <p className="text-[10px] font-black uppercase tracking-wider text-zinc-500 sm:text-xs">
              Platform Status
            </p>

            <p className="mt-1 text-sm font-bold leading-6 text-yellow-400">
              Core Tools Under Development
            </p>
          </div>
        </div>

        <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => {
            const isLive = tool.status === "Live";

            const cardContent = (
              <article
                className={`group relative flex h-full min-w-0 flex-col overflow-hidden border p-5 transition sm:p-6 ${
                  isLive
                    ? "border-zinc-700 bg-zinc-900 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-xl"
                    : "border-zinc-800 bg-zinc-900/60"
                }`}
              >
                <div className="absolute left-0 top-0 h-1 w-full bg-yellow-400" />

                <div className="flex min-w-0 items-start justify-between gap-3 sm:gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-yellow-400 text-xs font-black text-zinc-950 sm:h-11 sm:w-11 sm:text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={`max-w-[55%] shrink-0 px-2 py-1 text-center text-[9px] font-black uppercase leading-4 tracking-wider min-[360px]:px-3 min-[360px]:text-[10px] sm:text-[11px] ${
                      isLive
                        ? "bg-yellow-400 text-zinc-950"
                        : "border border-zinc-700 bg-zinc-950 text-zinc-500"
                    }`}
                  >
                    {tool.status}
                  </span>
                </div>

                <p className="mt-6 text-[10px] font-black uppercase leading-5 tracking-[0.14em] text-yellow-400 sm:mt-7 sm:text-xs sm:tracking-[0.18em]">
                  {tool.category}
                </p>

                <h3 className="mt-2 text-xl font-black leading-tight text-white sm:mt-3">
                  {tool.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-6 text-zinc-400">
                  {tool.description}
                </p>

                <div className="mt-6 border-t border-zinc-800 pt-5 sm:mt-7">
                  <span
                    className={`inline-flex min-h-6 items-center text-sm font-black ${
                      isLive
                        ? "text-yellow-400 transition group-hover:text-yellow-300"
                        : "text-zinc-600"
                    }`}
                  >
                    {isLive ? (
                      <>
                        Open Tool
                        <span
                          className="ml-2 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        >
                          &rarr;
                        </span>
                      </>
                    ) : (
                      "Development Planned"
                    )}
                  </span>
                </div>
              </article>
            );

            if (!isLive) {
              return (
                <div
                  key={tool.title}
                  className="min-w-0"
                >
                  {cardContent}
                </div>
              );
            }

            return (
              <Link
                key={tool.title}
                href={tool.href}
                className="block min-w-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                aria-label={`Open ${tool.title}`}
              >
                {cardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}