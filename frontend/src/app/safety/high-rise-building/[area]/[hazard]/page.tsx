import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import {
  getHighRiseHazard,
  highRiseHazards,
} from "@/data/safety/high-rise-hazards";

type HazardPageProps = {
  params: Promise<{
    area: string;
    hazard: string;
  }>;
};

export function generateStaticParams() {
  return highRiseHazards.map((hazard) => ({
    area: hazard.areaSlug,
    hazard: hazard.hazardSlug,
  }));
}

export async function generateMetadata({
  params,
}: HazardPageProps): Promise<Metadata> {
  const { area, hazard } = await params;

  const hazardData = getHighRiseHazard(area, hazard);

  if (!hazardData) {
    return {
      title: "Safety Hazard Not Found",
      description:
        "The requested CivilToolsHub safety hazard topic could not be found.",
    };
  }

  return {
    title: `${hazardData.title} | ${hazardData.areaTitle} Safety`,
    description: hazardData.summary,
    keywords: [
      hazardData.title,
      `${hazardData.title} Hazard`,
      `${hazardData.title} Safety`,
      `${hazardData.areaTitle} Safety`,
      "High Rise Building Safety",
      "Construction Safety Hazards",
      "Safety Inspection",
      "Safety Observation",
    ],
  };
}

export default async function HazardPage({
  params,
}: HazardPageProps) {
  const { area, hazard } = await params;

  const hazardData = getHighRiseHazard(area, hazard);

  if (!hazardData) {
    notFound();
  }

  const relatedHazards = hazardData.relatedTopics
    .map((topic) =>
      highRiseHazards.find(
        (item) =>
          item.areaSlug === hazardData.areaSlug &&
          item.title === topic,
      ),
    )
    .filter(
      (
        item,
      ): item is (typeof highRiseHazards)[number] =>
        Boolean(item),
    );

  return (
    <>
      <Header />

      <main className="min-h-screen bg-stone-100">
        <section className="border-b border-zinc-800 bg-zinc-950">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-sm font-bold text-zinc-400"
            >
              <Link
                href="/safety"
                className="transition hover:text-yellow-400"
              >
                Safety Library
              </Link>

              <span aria-hidden="true">/</span>

              <Link
                href="/safety/high-rise-building"
                className="transition hover:text-yellow-400"
              >
                High-Rise Building
              </Link>

              <span aria-hidden="true">/</span>

              <Link
                href={`/safety/high-rise-building#${hazardData.areaSlug}`}
                className="transition hover:text-yellow-400"
              >
                {hazardData.areaTitle}
              </Link>

              <span aria-hidden="true">/</span>

              <span className="text-yellow-400">
                {hazardData.title}
              </span>
            </nav>

            <div className="mt-10 max-w-5xl">
              <div className="flex items-center gap-3">
                <span className="h-1 w-12 bg-yellow-400" />

                <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-400">
                  {hazardData.areaTitle} · Hazard Topic
                </p>
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                {hazardData.title}
              </h1>

              <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-400">
                {hazardData.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <HeroTag>High-Rise Safety</HeroTag>
                <HeroTag>{hazardData.areaTitle}</HeroTag>
                <HeroTag>Hazard Guidance</HeroTag>
                <HeroTag>Inspection Reference</HeroTag>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-stone-300 bg-yellow-400">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <p className="text-sm font-black leading-7 text-zinc-950">
              Practical topic structure: identify the unsafe
              condition, understand the exposure, inspect the work
              area, and apply controls under the applicable project
              safety system.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <InformationCard
              number="01"
              eyebrow="Hazard Exposure"
              title="What Can Happen?"
            >
              <NumberedList
                items={hazardData.whatCanHappen}
              />
            </InformationCard>

            <InformationCard
              number="02"
              eyebrow="Potential Outcome"
              title="Possible Consequences"
            >
              <ConsequenceGrid
                items={hazardData.possibleConsequences}
              />
            </InformationCard>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <InformationCard
              number="03"
              eyebrow="Site Inspection"
              title="What to Inspect"
            >
              <Checklist
                items={hazardData.inspectionPoints}
              />
            </InformationCard>

            <InformationCard
              number="04"
              eyebrow="Risk Control"
              title="Required Controls"
            >
              <ControlList
                items={hazardData.requiredControls}
              />
            </InformationCard>
          </div>
        </section>

        <section className="border-y border-zinc-800 bg-zinc-950">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="border border-zinc-800 bg-zinc-900 p-6 sm:p-8">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400">
                  Safety Observation Example
                </p>

                <h2 className="mt-4 text-2xl font-black text-white">
                  Professional Observation Wording
                </h2>

                <div className="mt-6 border-l-4 border-yellow-400 bg-zinc-950 p-5">
                  <p className="text-base font-bold leading-8 text-zinc-200">
                    “{hazardData.observationExample}”
                  </p>
                </div>

                <p className="mt-5 text-sm leading-7 text-zinc-400">
                  The wording should be adjusted to match the actual
                  site condition, exact location, work activity, and
                  verified facts observed during inspection.
                </p>
              </div>

              <div className="border border-zinc-800 bg-zinc-900 p-6 sm:p-8">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400">
                  Recommended Action
                </p>

                <h2 className="mt-4 text-2xl font-black text-white">
                  Corrective Action Guidance
                </h2>

                <div className="mt-6 border-l-4 border-yellow-400 bg-yellow-400 p-5">
                  <p className="text-base font-black leading-8 text-zinc-950">
                    {hazardData.recommendedAction}
                  </p>
                </div>

                <p className="mt-5 text-sm leading-7 text-zinc-400">
                  Final corrective action must consider the approved
                  scaffold arrangement, competent inspection process,
                  project procedures, and actual site conditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
                Related Hazard Topics
              </p>

              <h2 className="mt-3 text-3xl font-black text-zinc-950">
                Continue the Safety Inspection
              </h2>

              {relatedHazards.length > 0 ? (
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {relatedHazards.map((relatedHazard) => (
                    <Link
                      key={relatedHazard.hazardSlug}
                      href={`/safety/high-rise-building/${relatedHazard.areaSlug}/${relatedHazard.hazardSlug}`}
                      className="group flex items-center justify-between gap-4 border border-stone-300 bg-white p-5 transition hover:border-yellow-500 hover:bg-yellow-50"
                    >
                      <div>
                        <p className="text-xs font-black uppercase tracking-wider text-yellow-600">
                          {relatedHazard.areaTitle}
                        </p>

                        <p className="mt-2 font-black text-zinc-950">
                          {relatedHazard.title}
                        </p>
                      </div>

                      <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-zinc-950 font-black text-yellow-400 transition group-hover:bg-yellow-400 group-hover:text-zinc-950">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="mt-7 border border-stone-300 bg-white p-6">
                  <p className="text-sm leading-7 text-zinc-600">
                    Related detailed hazard pages are being added to
                    this safety branch.
                  </p>
                </div>
              )}
            </div>

            <aside className="border border-stone-300 bg-white">
              <div className="h-1 bg-yellow-400" />

              <div className="p-6 sm:p-7">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-600">
                  Safety Information Note
                </p>

                <h2 className="mt-4 text-2xl font-black text-zinc-950">
                  Use Site-Specific Requirements
                </h2>

                <p className="mt-5 text-sm leading-7 text-zinc-600">
                  CivilToolsHub provides practical learning and
                  preliminary safety reference. This page does not
                  replace a competent scaffold assessment, approved
                  scaffold design, manufacturer or system
                  instructions, risk assessment, method statement,
                  permit requirement, or applicable legal and project
                  requirements.
                </p>

                <Link
                  href={`/safety/high-rise-building#${hazardData.areaSlug}`}
                  className="mt-7 flex items-center justify-between bg-zinc-950 px-5 py-4 font-black text-white transition hover:bg-yellow-400 hover:text-zinc-950"
                >
                  <span>
                    Back to {hazardData.areaTitle}
                  </span>

                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </aside>
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

function InformationCard({
  number,
  eyebrow,
  title,
  children,
}: {
  number: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="overflow-hidden border border-stone-300 bg-white shadow-sm">
      <div className="h-1 bg-yellow-400" />

      <div className="p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-zinc-950 text-sm font-black text-yellow-400">
            {number}
          </span>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-600">
              {eyebrow}
            </p>

            <h2 className="mt-2 text-2xl font-black text-zinc-950">
              {title}
            </h2>
          </div>
        </div>

        <div className="mt-7">{children}</div>
      </div>
    </article>
  );
}

function NumberedList({
  items,
}: {
  items: string[];
}) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={item}
          className="flex gap-4 border border-stone-200 bg-stone-50 p-4"
        >
          <span className="font-black text-yellow-600">
            {String(index + 1).padStart(2, "0")}
          </span>

          <p className="text-sm font-medium leading-7 text-zinc-700">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}

function ConsequenceGrid({
  items,
}: {
  items: string[];
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item}
          className="border-l-4 border-zinc-950 bg-stone-100 p-4"
        >
          <p className="text-sm font-bold leading-6 text-zinc-800">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}

function Checklist({
  items,
}: {
  items: string[];
}) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item}
          className="flex gap-4 border border-stone-200 p-4"
        >
          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center border-2 border-zinc-950 bg-yellow-400 text-[10px] font-black text-zinc-950">
            ✓
          </span>

          <p className="text-sm font-medium leading-7 text-zinc-700">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}

function ControlList({
  items,
}: {
  items: string[];
}) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={item}
          className="flex gap-4 bg-zinc-950 p-4"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-yellow-400 text-xs font-black text-zinc-950">
            {index + 1}
          </span>

          <p className="text-sm font-medium leading-7 text-zinc-300">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}