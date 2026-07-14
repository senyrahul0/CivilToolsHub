import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About CivilToolsHub",
  description:
    "Learn about CivilToolsHub, a practical construction tools and safety knowledge platform built around real construction and safety challenges.",
};

const focusAreas = [
  {
    number: "01",
    title: "Construction Calculators",
    description:
      "Simple and practical calculation tools for common construction and engineering requirements.",
  },
  {
    number: "02",
    title: "Safety Knowledge",
    description:
      "Structured safety information organized by construction and industrial sectors.",
  },
  {
    number: "03",
    title: "Hazard Guidance",
    description:
      "Hazard-specific guidance covering consequences, common causes, control measures, and inspection points.",
  },
  {
    number: "04",
    title: "Practical Field Resources",
    description:
      "Useful construction resources designed around problems faced by site teams and safety professionals.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-400">
              About CivilToolsHub
            </p>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Built from practical
              <span className="block text-yellow-400">
                construction experience.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
              CivilToolsHub is a practical construction tools and
              safety knowledge platform created to make useful field
              information easier to find, understand, and use.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800 bg-zinc-900/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-20">
          <div>
            <div className="relative overflow-hidden border border-zinc-700 bg-zinc-900">
              <Image
                src="/images/about/gaurav-mishra.jpg"
                alt="Gaurav Mishra"
                width={800}
                height={800}
                priority
                className="aspect-square w-full object-cover object-center"
              />

              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent" />

              <div className="absolute bottom-5 left-5">
                <span className="inline-flex bg-yellow-400 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-zinc-950">
                  Founder
                </span>
              </div>
            </div>

            <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-yellow-400">
              Founder
            </p>

            <h2 className="mt-3 text-3xl font-black text-white">
              Gaurav Mishra
            </h2>

            <p className="mt-2 font-bold text-zinc-400">
              B.Tech & PDIS
            </p>

            <p className="mt-1 text-zinc-500">
              Construction Safety Professional
            </p>

            <p className="mt-1 text-zinc-500">
              12+ Years of High-Rise Safety Experience
            </p>

            <a
              href="https://www.linkedin.com/in/gaurav-mishra-85879788/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center border border-zinc-700 bg-zinc-950 px-5 py-3 text-sm font-black text-white transition hover:border-yellow-400 hover:text-yellow-400"
            >
              View LinkedIn Profile →
            </a>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400">
              The Story
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Why CivilToolsHub was created
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-zinc-400">
              <p>
                CivilToolsHub is built around practical construction
                and workplace safety challenges faced by engineers,
                safety professionals, supervisors, and site teams.
              </p>

              <p>
                Construction teams often need practical information
                quickly. Calculation tools, hazard information, control
                measures, and inspection guidance are frequently spread
                across different documents, manuals, and technical
                resources.
              </p>

              <p>
                This practical challenge became the foundation of
                CivilToolsHub.
              </p>

              <p>
                The platform is being developed to organize useful
                construction tools and safety knowledge in a simple
                structure. A user should be able to move from a
                construction sector to a work activity, identify a
                relevant hazard, and review practical control and
                inspection points.
              </p>

              <p>
                CivilToolsHub is a growing platform focused on
                practical calculators, structured safety guidance,
                useful templates, and field-oriented construction
                resources.
              </p>
            </div>

            <div className="mt-10 border-l-4 border-yellow-400 bg-zinc-950 p-6">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400">
                Platform Focus
              </p>

              <p className="mt-4 leading-8 text-zinc-400">
                The focus is simple: organize construction information
                around real work activities, practical hazards, and
                field-level requirements so users can reach useful
                guidance without unnecessary complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400">
              Professional Experience
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Safety knowledge shaped by high-rise construction
              experience.
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              Gaurav Mishra is a construction safety professional with
              more than 12 years of hands-on experience in high-rise
              building projects. His professional background includes
              B.Tech and PDIS qualifications, with safety credentials
              and professional development in occupational health and
              safety systems.
            </p>

            <p className="mt-5 leading-8 text-zinc-400">
              Practical construction safety experience helps shape the
              platform&apos;s focus on workplace hazards, control
              measures, inspection points, and field-oriented safety
              knowledge.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border border-zinc-800 bg-zinc-900 p-6">
              <p className="text-3xl font-black text-yellow-400">
                12+
              </p>

              <p className="mt-3 text-sm font-bold text-white">
                Years of Experience
              </p>
            </div>

            <div className="border border-zinc-800 bg-zinc-900 p-6">
              <p className="text-3xl font-black text-yellow-400">
                B.Tech
              </p>

              <p className="mt-3 text-sm font-bold text-white">
                Technical Background
              </p>
            </div>

            <div className="border border-zinc-800 bg-zinc-900 p-6">
              <p className="text-3xl font-black text-yellow-400">
                PDIS
              </p>

              <p className="mt-3 text-sm font-bold text-white">
                Safety Qualification
              </p>
            </div>

            <div className="border border-zinc-800 bg-zinc-900 p-6">
              <p className="text-3xl font-black text-yellow-400">
                HSE
              </p>

              <p className="mt-3 text-sm font-bold text-white">
                Construction Safety Focus
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800 bg-zinc-900/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400">
              The Purpose
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Practical information for real construction work.
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              CivilToolsHub is being developed around practical
              construction problems rather than information overload.
              The goal is to provide structured resources that are
              easier to explore and useful as a starting point for
              field professionals.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {focusAreas.map((area) => (
              <article
                key={area.number}
                className="border border-zinc-800 bg-zinc-950 p-6 transition hover:border-yellow-400/60"
              >
                <span className="text-sm font-black text-yellow-400">
                  {area.number}
                </span>

                <h3 className="mt-5 text-xl font-black text-white">
                  {area.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="border border-yellow-400/40 bg-zinc-900 p-8 sm:p-10">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400">
              Explore CivilToolsHub
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl">
              Tools and safety knowledge built around construction work.
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-zinc-400">
              Explore practical construction calculators and structured
              safety guidance organized around sectors, work
              activities, and hazards.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/safety"
                className="bg-yellow-400 px-6 py-4 text-sm font-black text-zinc-950 transition hover:bg-yellow-300"
              >
                Explore Safety Library →
              </Link>

              <Link
                href="/calculators"
                className="border border-zinc-700 bg-zinc-950 px-6 py-4 text-sm font-black text-white transition hover:border-yellow-400 hover:text-yellow-400"
              >
                Explore Calculators
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}