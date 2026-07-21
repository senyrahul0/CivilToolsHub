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
  {
    name: "Safety Observation Generator",
    href: "/safety-observation-generator",
  },
];

const legalLinks = [
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    name: "Terms & Conditions",
    href: "/terms-and-conditions",
  },
  {
    name: "Disclaimer",
    href: "/disclaimer",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-white">
      <div className="h-1 bg-yellow-400" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* CivilToolsHub */}
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

          {/* Calculators */}
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

          {/* Platform */}
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

          {/* Legal & Support */}
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-yellow-400">
              Legal & Support
            </p>

            <ul className="mt-6 space-y-4">
              {legalLinks.map((link) => (
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

            <div className="mt-7 border border-zinc-800 bg-zinc-900 p-5">
              <p className="text-xs font-black uppercase tracking-wider text-zinc-500">
                Need Help?
              </p>

              <p className="mt-2 text-xl font-black text-yellow-400">
                Contact CivilToolsHub
              </p>

              <p className="mt-2 text-xs leading-5 text-zinc-500">
                Report technical issues, suggest improvements, or
                contact us regarding our construction tools and safety
                resources.
              </p>

              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-black text-white transition hover:text-yellow-400"
              >
                Contact Us
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 border-t border-zinc-800 pt-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <p className="text-sm text-zinc-500">
                © {currentYear} CivilToolsHub. Construction tools and
                practical safety knowledge.
              </p>

              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs">
                <Link
                  href="/privacy-policy"
                  className="text-zinc-500 transition hover:text-yellow-400"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/terms-and-conditions"
                  className="text-zinc-500 transition hover:text-yellow-400"
                >
                  Terms & Conditions
                </Link>

                <Link
                  href="/disclaimer"
                  className="text-zinc-500 transition hover:text-yellow-400"
                >
                  Disclaimer
                </Link>

                <Link
                  href="/contact"
                  className="text-zinc-500 transition hover:text-yellow-400"
                >
                  Contact Us
                </Link>
              </div>
            </div>

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