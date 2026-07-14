import Link from "next/link";

const calculatorLinks = [
  {
    name: "Concrete Calculator",
    href: "/calculators/concrete-calculator",
  },
  {
    name: "Steel Weight Calculator",
    href: "/calculators/steel-weight-calculator",
  },
  {
    name: "Brick Calculator",
    href: "/calculators/brick-calculator",
  },
  {
    name: "Plaster Calculator",
    href: "/calculators/plaster-calculator",
  },
];

const platformLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Safety Library",
    href: "/safety",
  },
  {
    name: "All Calculators",
    href: "/calculators",
  },
];

const upcomingTools = [
  "Safety Observation Generator",
  "Construction Templates",
  "Site Safety Tools",
  "More Engineering Calculators",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-white">
      <div className="h-1 bg-yellow-400" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="group flex w-fit items-center gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center bg-yellow-400 text-lg font-black text-zinc-950 transition group-hover:bg-yellow-300">
                CT
              </span>

              <div>
                <p className="text-xl font-black tracking-tight text-white">
                  CivilTools
                  <span className="text-yellow-400">
                    Hub
                  </span>
                </p>

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                  Construction Tools
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-zinc-400">
              Practical construction calculators, structured safety
              knowledge, and digital site tools for civil engineers,
              site engineers, safety professionals, and construction
              teams.
            </p>

            <div className="mt-6 border-l-4 border-yellow-400 bg-zinc-900 p-4">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-400">
                Built for Site Work
              </p>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Fast calculations. Practical safety. Clear guidance.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-yellow-400">
              Calculators
            </p>

            <ul className="mt-6 space-y-4">
              {calculatorLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition hover:text-yellow-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  href="/calculators"
                  className="inline-flex items-center gap-2 text-sm font-black text-white transition hover:text-yellow-400"
                >
                  View All Calculators
                  <span>→</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-yellow-400">
              Platform
            </p>

            <ul className="mt-6 space-y-4">
              {platformLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-yellow-400"
                  >
                    <span>{link.name}</span>
                    <span className="text-yellow-400">→</span>
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-xs font-black uppercase tracking-[0.18em] text-zinc-600">
              More Sections
            </p>

            <ul className="mt-4 space-y-3 text-sm text-zinc-600">
              <li>Templates — Coming Soon</li>
              <li>Blog — Coming Soon</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-yellow-400">
              In Development
            </p>

            <ul className="mt-6 space-y-4">
              {upcomingTools.map((tool) => (
                <li
                  key={tool}
                  className="flex items-start gap-3 text-sm text-zinc-400"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-yellow-400" />

                  <span>{tool}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 border border-zinc-800 bg-zinc-900 p-5">
              <p className="text-xs font-black uppercase tracking-wider text-zinc-500">
                Current Platform
              </p>

              <p className="mt-2 text-2xl font-black text-yellow-400">
                Tools + Safety
              </p>

              <p className="mt-2 text-xs leading-5 text-zinc-500">
                Construction calculators and structured safety guidance
                organized around sectors, work activities, and hazards.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-sm text-zinc-500">
              © {currentYear} CivilToolsHub. Construction tools and
              practical safety knowledge.
            </p>

            <p className="max-w-2xl text-xs leading-5 text-zinc-600 lg:text-right">
              Calculator results and safety information are provided as
              practical reference resources. Verify final quantities,
              execution requirements, safety controls, and site
              procedures against approved drawings, project
              specifications, applicable codes, manufacturer data, and
              actual site conditions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}