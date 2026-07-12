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
    <section className="border-y border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-1 w-10 bg-yellow-400" />

              <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400">
                Construction Engineering Tools
              </p>
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Popular Construction Tools
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
              Practical calculators and site tools built for civil
              engineers, site engineers, safety professionals, and
              construction teams.
            </p>
          </div>

          <div className="w-fit border border-zinc-700 bg-zinc-900 px-4 py-3">
            <p className="text-xs font-black uppercase tracking-wider text-zinc-500">
              Platform Status
            </p>

            <p className="mt-1 text-sm font-bold text-yellow-400">
              Core Tools Under Development
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => {
            const isLive = tool.status === "Live";

            const cardContent = (
              <article
                className={`group relative h-full overflow-hidden border p-6 transition ${
                  isLive
                    ? "border-zinc-700 bg-zinc-900 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-xl"
                    : "border-zinc-800 bg-zinc-900/60"
                }`}
              >
                <div className="absolute left-0 top-0 h-1 w-full bg-yellow-400" />

                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center bg-yellow-400 text-sm font-black text-zinc-950">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={`px-3 py-1 text-[11px] font-black uppercase tracking-wider ${
                      isLive
                        ? "bg-yellow-400 text-zinc-950"
                        : "border border-zinc-700 bg-zinc-950 text-zinc-500"
                    }`}
                  >
                    {tool.status}
                  </span>
                </div>

                <p className="mt-7 text-xs font-black uppercase tracking-[0.18em] text-yellow-400">
                  {tool.category}
                </p>

                <h3 className="mt-3 text-xl font-black text-white">
                  {tool.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  {tool.description}
                </p>

                <div className="mt-7 border-t border-zinc-800 pt-5">
                  <span
                    className={`text-sm font-black ${
                      isLive
                        ? "text-yellow-400 transition group-hover:text-yellow-300"
                        : "text-zinc-600"
                    }`}
                  >
                    {isLive
                      ? "Open Tool →"
                      : "Development Planned"}
                  </span>
                </div>
              </article>
            );

            if (!isLive) {
              return (
                <div key={tool.title}>
                  {cardContent}
                </div>
              );
            }

            return (
              <Link
                key={tool.title}
                href={tool.href}
                className="block"
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