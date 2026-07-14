import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { highRiseHazards } from "@/data/safety/high-rise-hazards";
import {
  highRiseSafetyAreas,
  highRiseSafetyStats,
} from "@/data/safety/high-rise";

export const metadata: Metadata = {
  title: "High-Rise Building Safety",
  description:
    "Explore high-rise building safety work areas, activities, and hazard topics covering work at height, scaffolding, floor openings, formwork, lifting, electrical safety, and site safety management.",
  keywords: [
    "High Rise Building Safety",
    "Construction Safety Hazards",
    "Work at Height Safety",
    "Scaffolding Safety",
    "Floor Opening Safety",
    "Mivan Safety",
    "Formwork Safety",
    "Lifting Safety",
    "Electrical Safety Construction",
    "Construction Safety Management",
  ],
};

export default function HighRiseBuildingSafetyPage() {
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
                  Sector 01 · High-Rise Construction
                </p>
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                High-Rise Building{" "}
                <span className="text-yellow-400">Safety</span>
              </h1>

              <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-400">
                Practical safety knowledge for towers, residential
                buildings, commercial projects, skyscrapers, and
                vertical construction activities.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <HeroTag>
                  {highRiseSafetyStats.totalAreas} Safety Areas
                </HeroTag>

                <HeroTag>
                  {highRiseSafetyStats.totalActivities} Work Activities
                </HeroTag>

                <HeroTag>
                  {highRiseSafetyStats.totalHazards} Hazard Topics
                </HeroTag>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-stone-300 bg-yellow-400">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6 lg:px-8">
            <Stat
              value={String(highRiseSafetyStats.totalAreas)}
              label="Core Safety Areas"
            />

            <Stat
              value={String(highRiseSafetyStats.totalActivities)}
              label="Work Activities"
            />

            <Stat
              value={String(highRiseSafetyStats.totalHazards)}
              label="Hazard Topics"
            />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
              High-Rise Safety Areas
            </p>

            <h2 className="mt-3 text-3xl font-black text-zinc-950 sm:text-4xl">
              Select a Work Area to Explore Safety Hazards
            </h2>

            <p className="mt-4 leading-7 text-zinc-600">
              Each work area is organized around common site activities
              and hazard topics. Select an available hazard topic to
              explore hazard exposure, possible consequences, inspection
              points, controls, observation wording, and corrective
              action guidance.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {highRiseSafetyAreas.map((area) => (
              <article
                key={area.slug}
                id={area.slug}
                className="scroll-mt-24 overflow-hidden border border-stone-300 bg-white shadow-sm"
              >
                <div className="h-1 bg-yellow-400" />

                <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
                  <div className="border-b border-stone-200 p-6 sm:p-8 lg:border-b-0 lg:border-r">
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-14 w-14 items-center justify-center bg-zinc-950 text-lg font-black text-yellow-400">
                        {area.number}
                      </span>

                      <span className="border border-stone-300 bg-stone-100 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-zinc-500">
                        Area Library
                      </span>
                    </div>

                    <h2 className="mt-6 text-2xl font-black text-zinc-950 sm:text-3xl">
                      {area.title}
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-zinc-600">
                      {area.shortDescription}
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
                            className="border border-stone-300 bg-stone-50 px-3 py-2 text-xs font-bold text-zinc-700"
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
                        const hazardData = highRiseHazards.find(
                          (item) =>
                            item.areaSlug === area.slug &&
                            item.title === hazard,
                        );

                        if (!hazardData) {
                          return (
                            <div
                              key={hazard}
                              className="flex items-center gap-4 border border-stone-300 bg-stone-50 p-4"
                            >
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-zinc-950 text-xs font-black text-yellow-400">
                                {String(index + 1).padStart(2, "0")}
                              </span>

                              <span className="flex-1 text-sm font-bold leading-6 text-zinc-800">
                                {hazard}
                              </span>

                              <span className="text-[10px] font-black uppercase tracking-wider text-zinc-400">
                                Soon
                              </span>
                            </div>
                          );
                        }

                        return (
                          <Link
                            key={hazard}
                            href={`/safety/high-rise-building/${hazardData.areaSlug}/${hazardData.hazardSlug}`}
                            className="group flex items-center gap-4 border border-stone-300 bg-stone-50 p-4 transition hover:border-yellow-500 hover:bg-yellow-50"
                          >
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-zinc-950 text-xs font-black text-yellow-400">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <span className="flex-1 text-sm font-bold leading-6 text-zinc-800">
                              {hazard}
                            </span>

                            <span
                              aria-hidden="true"
                              className="font-black text-zinc-400 transition group-hover:translate-x-1 group-hover:text-zinc-950"
                            >
                              →
                            </span>
                          </Link>
                        );
                      })}
                    </div>

                    <div className="mt-7 border-l-4 border-yellow-400 bg-zinc-950 p-5">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-400">
                        Detailed Hazard Pages
                      </p>

                      <p className="mt-3 text-sm leading-6 text-zinc-400">
                        Available hazard topics can be opened to review
                        hazard exposure, possible consequences,
                        inspection points, control guidance, observation
                        examples, and recommended actions.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-zinc-800 bg-zinc-950">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400">
                  Practical Safety Flow
                </p>

                <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
                  Identify the Hazard. Inspect the Condition. Apply the
                  Control.
                </h2>

                <p className="mt-5 leading-7 text-zinc-400">
                  CivilToolsHub is structured to help users move from a
                  work area to a specific hazard and then to practical
                  inspection and reporting guidance.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-4">
                <FlowStep number="01" title="Work Area" />
                <FlowStep number="02" title="Hazard" />
                <FlowStep number="03" title="Control" />
                <FlowStep number="04" title="Inspect" />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="border-l-4 border-yellow-400 bg-yellow-50 p-6">
            <p className="text-sm leading-7 text-zinc-800">
              <strong className="text-zinc-950">
                Safety Information Note:
              </strong>{" "}
              Hazard names and work-area groupings are provided as a
              practical learning structure. Actual controls, inspection
              criteria, work permissions, and compliance requirements
              must be verified against applicable law, approved project
              procedures, risk assessments, method statements, permit
              systems, manufacturer instructions, and site-specific
              conditions.
            </p>
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
    <span className="border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-300">
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

      <p className="mt-1 text-sm font-bold text-zinc-800">
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
    <div className="border border-stone-300 bg-stone-50 p-4">
      <p className="text-2xl font-black text-zinc-950">
        {value}
      </p>

      <p className="mt-1 text-xs font-bold uppercase tracking-wider text-zinc-500">
        {label}
      </p>
    </div>
  );
}

function FlowStep({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="border border-zinc-800 bg-zinc-900 p-5">
      <p className="text-xs font-black text-yellow-400">
        {number}
      </p>

      <p className="mt-3 text-sm font-black uppercase tracking-wider text-white">
        {title}
      </p>
    </div>
  );
}