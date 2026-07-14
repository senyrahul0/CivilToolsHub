import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import {
  getSafetySector,
  getSafetySectorStats,
  safetySectors,
} from "@/data/safety/sectors";
import { getHazardLink } from "@/lib/hazard-links";

type SectorPageProps = {
  params: Promise<{
    sector: string;
  }>;
};

export function generateStaticParams() {
  return safetySectors.map((sector) => ({
    sector: sector.slug,
  }));
}

export async function generateMetadata({
  params,
}: SectorPageProps): Promise<Metadata> {
  const { sector: sectorSlug } = await params;

  const sector = getSafetySector(sectorSlug);

  if (!sector) {
    return {
      title: "Safety Sector Not Found",
      description:
        "The requested safety sector could not be found in the CivilToolsHub Safety Library.",
    };
  }

  return {
    title: sector.title,
    description: sector.description,
    keywords: [
      sector.title,
      `${sector.shortTitle} Safety`,
      `${sector.shortTitle} Hazards`,
      `${sector.shortTitle} Safety Topics`,
      "Safety Library",
      "Workplace Safety Hazards",
      "Safety Inspection Topics",
      "CivilToolsHub",
    ],
  };
}

export default async function SafetySectorPage({
  params,
}: SectorPageProps) {
  const { sector: sectorSlug } = await params;

  const sector = getSafetySector(sectorSlug);

  if (!sector) {
    notFound();
  }

  const stats = getSafetySectorStats(sector);

  return (
    <>
      <Header />

      <main className="min-h-screen bg-stone-100">
        <section className="border-b border-zinc-800 bg-zinc-950">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <Link
              href="/safety"
              className="inline-flex items-center gap-2 text-sm font-bold text-zinc-400 transition hover:text-yellow-400"
            >
              <span aria-hidden="true">←</span>
              Safety Library
            </Link>

            <div className="mt-8 max-w-5xl">
              <div className="flex items-center gap-3">
                <span className="h-1 w-12 bg-yellow-400" />

                <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-400">
                  Sector {sector.number} · Safety Library
                </p>
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                {sector.shortTitle}{" "}
                <span className="text-yellow-400">Safety</span>
              </h1>

              <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-400">
                {sector.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <HeroTag>{stats.totalAreas} Safety Areas</HeroTag>

                <HeroTag>
                  {stats.totalActivities} Work Activities
                </HeroTag>

                <HeroTag>{stats.totalHazards} Hazard Topics</HeroTag>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-stone-300 bg-yellow-400">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6 lg:px-8">
            <Stat
              value={String(stats.totalAreas)}
              label="Core Safety Areas"
            />

            <Stat
              value={String(stats.totalActivities)}
              label="Work Activities"
            />

            <Stat
              value={String(stats.totalHazards)}
              label="Hazard Topics"
            />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
                Sector Overview
              </p>

              <h2 className="mt-3 text-3xl font-black text-zinc-950 sm:text-4xl">
                Explore {sector.shortTitle} Safety
              </h2>

              <p className="mt-5 leading-7 text-zinc-600">
                This sector library organizes common work activities and
                hazard topics into practical safety areas. Use the
                structure to understand where hazards may arise during
                project execution, inspection, planning, and field
                supervision.
              </p>
            </div>

            <div className="border border-stone-300 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-600">
                Common Project Types
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {sector.projectTypes.map((projectType) => (
                  <span
                    key={projectType}
                    className="border border-stone-300 bg-stone-50 px-4 py-3 text-sm font-bold text-zinc-800"
                  >
                    {projectType}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-stone-300 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
                Core Safety Areas
              </p>

              <h2 className="mt-3 text-3xl font-black text-zinc-950 sm:text-4xl">
                Work Areas, Activities & Hazard Topics
              </h2>

              <p className="mt-4 leading-7 text-zinc-600">
                Review each safety area to understand common activities
                and hazard topics associated with the sector. Available
                hazard topics can be opened for detailed practical
                safety guidance.
              </p>
            </div>

            <div className="mt-10 space-y-6">
              {sector.areas.map((area) => (
                <article
                  key={area.slug}
                  id={area.slug}
                  className="scroll-mt-24 overflow-hidden border border-stone-300 bg-stone-50 shadow-sm"
                >
                  <div className="h-1 bg-yellow-400" />

                  <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
                    <div className="border-b border-stone-300 p-6 sm:p-8 lg:border-b-0 lg:border-r">
                      <div className="flex items-start justify-between gap-4">
                        <span className="flex h-14 w-14 items-center justify-center bg-zinc-950 text-lg font-black text-yellow-400">
                          {area.number}
                        </span>

                        <span className="border border-stone-300 bg-white px-3 py-1 text-[11px] font-black uppercase tracking-wider text-zinc-500">
                          Safety Area
                        </span>
                      </div>

                      <h2 className="mt-6 text-2xl font-black text-zinc-950 sm:text-3xl">
                        {area.title}
                      </h2>

                      <p className="mt-4 text-sm leading-7 text-zinc-600">
                        {area.description}
                      </p>

                      <div className="mt-6 grid grid-cols-2 gap-3">
                        <MiniStat
                          value={String(area.activities.length)}
                          label="Activities"
                        />

                        <MiniStat
                          value={String(area.hazards.length)}
                          label="Hazards"
                        />
                      </div>

                      <div className="mt-7">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-zinc-500">
                          Common Work Activities
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {area.activities.map((activity) => (
                            <span
                              key={activity}
                              className="border border-stone-300 bg-white px-3 py-2 text-xs font-bold text-zinc-700"
                            >
                              {activity}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8">
                      <div className="flex flex-wrap items-end justify-between gap-4">
                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-600">
                            Hazard Library
                          </p>

                          <h3 className="mt-2 text-xl font-black text-zinc-950">
                            Common Hazard Topics
                          </h3>
                        </div>

                        <span className="text-sm font-black text-zinc-500">
                          {area.hazards.length} Topics
                        </span>
                      </div>

                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {area.hazards.map((hazard, index) => {
                          const hazardLink = getHazardLink(
                            area.title,
                            hazard,
                          );

                          if (hazardLink) {
                            return (
                              <Link
                                key={hazard}
                                href={hazardLink}
                                className="group flex items-center gap-4 border border-stone-300 bg-white p-4 transition duration-200 hover:-translate-y-0.5 hover:border-yellow-500 hover:bg-yellow-50 hover:shadow-md"
                              >
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-zinc-950 text-xs font-black text-yellow-400">
                                  {String(index + 1).padStart(
                                    2,
                                    "0",
                                  )}
                                </span>

                                <span className="flex-1 text-sm font-bold leading-6 text-zinc-800">
                                  {hazard}
                                </span>

                                <span className="shrink-0 text-[11px] font-black uppercase tracking-wider text-yellow-700 transition group-hover:text-zinc-950">
                                  View →
                                </span>
                              </Link>
                            );
                          }

                          return (
                            <div
                              key={hazard}
                              className="flex items-center gap-4 border border-stone-300 bg-white p-4"
                            >
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-zinc-950 text-xs font-black text-yellow-400">
                                {String(index + 1).padStart(
                                  2,
                                  "0",
                                )}
                              </span>

                              <span className="flex-1 text-sm font-bold leading-6 text-zinc-800">
                                {hazard}
                              </span>

                              <span className="shrink-0 text-[10px] font-black uppercase tracking-wider text-zinc-400">
                                Coming Soon
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="mt-7 border-l-4 border-yellow-400 bg-zinc-950 p-5">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-400">
                          Detailed Hazard Guidance
                        </p>

                        <p className="mt-3 text-sm leading-6 text-zinc-400">
                          Open available hazard topics to review the
                          hazard description, possible consequences,
                          practical control measures, inspection points,
                          observation guidance, and corrective-action
                          references.
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-800 bg-zinc-950">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400">
                  Safety Knowledge Structure
                </p>

                <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
                  Sector to Work Area. Work Area to Hazard.
                </h2>

                <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
                  CivilToolsHub is structured to help safety
                  professionals move from a project sector to a specific
                  work area and then directly to the hazard that needs
                  practical guidance.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <KnowledgeStep
                  number="01"
                  title="Select Sector"
                  description="Choose the project or industrial sector."
                />

                <KnowledgeStep
                  number="02"
                  title="Find Work Area"
                  description="Open the relevant safety work area."
                />

                <KnowledgeStep
                  number="03"
                  title="Open Hazard"
                  description="Review practical hazard guidance."
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function HeroTag({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-black uppercase tracking-wider text-zinc-300">
      {children}
    </span>
  );
}

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="border-l-4 border-zinc-950 pl-5">
      <p className="text-4xl font-black text-zinc-950">
        {value}
      </p>

      <p className="mt-1 text-sm font-black uppercase tracking-wider text-zinc-800">
        {label}
      </p>
    </div>
  );
}

function MiniStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="border border-stone-300 bg-white p-4">
      <p className="text-2xl font-black text-zinc-950">
        {value}
      </p>

      <p className="mt-1 text-[11px] font-black uppercase tracking-wider text-zinc-500">
        {label}
      </p>
    </div>
  );
}

function KnowledgeStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="border border-zinc-800 bg-zinc-900 p-5">
      <span className="text-sm font-black text-yellow-400">
        {number}
      </span>

      <h3 className="mt-4 text-lg font-black text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-zinc-400">
        {description}
      </p>
    </div>
  );
}