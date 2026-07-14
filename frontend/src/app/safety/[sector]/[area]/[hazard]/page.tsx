import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import {
  getRelatedSectorHazards,
  getSectorHazard,
  getSectorHazardStaticParams,
} from "@/data/safety/sector-hazards";

type HazardPageProps = {
  params: Promise<{
    sector: string;
    area: string;
    hazard: string;
  }>;
};

export function generateStaticParams() {
  return getSectorHazardStaticParams();
}

export async function generateMetadata({
  params,
}: HazardPageProps): Promise<Metadata> {
  const {
    sector: sectorSlug,
    area: areaSlug,
    hazard: hazardSlug,
  } = await params;

  const hazard = getSectorHazard(
    sectorSlug,
    areaSlug,
    hazardSlug,
  );

  if (!hazard) {
    return {
      title: "Safety Hazard Not Found",
      description:
        "The requested safety hazard topic could not be found in the CivilToolsHub Safety Library.",
    };
  }

  return {
    title: `${hazard.hazardTitle} Safety`,
    description: hazard.overview,
    keywords: [
      hazard.hazardTitle,
      `${hazard.hazardTitle} Safety`,
      `${hazard.hazardTitle} Hazard`,
      `${hazard.areaTitle} Safety`,
      hazard.sectorTitle,
      "Safety Hazard",
      "Safety Control Measures",
      "Safety Inspection Checklist",
      "Safety Observation",
      "CivilToolsHub",
    ],
  };
}

export default async function SectorHazardPage({
  params,
}: HazardPageProps) {
  const {
    sector: sectorSlug,
    area: areaSlug,
    hazard: hazardSlug,
  } = await params;

  const hazard = getSectorHazard(
    sectorSlug,
    areaSlug,
    hazardSlug,
  );

  if (!hazard) {
    notFound();
  }

  const relatedHazards = getRelatedSectorHazards(hazard);

  return (
    <>
      <Header />

      <main className="min-h-screen bg-stone-100">
        <section className="border-b border-zinc-800 bg-zinc-950">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-sm font-bold"
            >
              <Link
                href="/safety"
                className="text-zinc-400 transition hover:text-yellow-400"
              >
                Safety Library
              </Link>

              <span className="text-zinc-700">/</span>

              <Link
                href={`/safety/${hazard.sectorSlug}`}
                className="text-zinc-400 transition hover:text-yellow-400"
              >
                {hazard.sectorTitle}
              </Link>

              <span className="text-zinc-700">/</span>

              <span className="text-zinc-400">
                {hazard.areaTitle}
              </span>

              <span className="text-zinc-700">/</span>

              <span className="text-yellow-400">
                {hazard.hazardTitle}
              </span>
            </nav>

            <div className="mt-10 max-w-5xl">
              <div className="flex items-center gap-3">
                <span className="h-1 w-12 bg-yellow-400" />

                <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-400">
                  Hazard Guidance
                </p>
              </div>

              <p className="mt-7 text-sm font-black uppercase tracking-[0.18em] text-zinc-400">
                {hazard.areaTitle}
              </p>

              <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                {hazard.hazardTitle}
              </h1>

              <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-400">
                {hazard.overview}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <HeroTag>{hazard.sectorTitle}</HeroTag>
                <HeroTag>{hazard.areaTitle}</HeroTag>
                <HeroTag>Hazard Guidance</HeroTag>
                <HeroTag>Inspection Reference</HeroTag>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-stone-300 bg-yellow-400">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6 lg:px-8">
            <Stat
              value={String(hazard.whatCanHappen.length)}
              label="Hazard Events"
            />

            <Stat
              value={String(hazard.controls.length)}
              label="Required Controls"
            />

            <Stat
              value={String(hazard.inspectionPoints.length)}
              label="Inspection Points"
            />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <ContentCard
              eyebrow="Hazard Understanding"
              title="What Can Happen?"
            >
              <NumberedList items={hazard.whatCanHappen} />
            </ContentCard>

            <ContentCard
              eyebrow="Potential Impact"
              title="Possible Consequences"
            >
              <TagGrid items={hazard.consequences} />
            </ContentCard>
          </div>
        </section>

        <section className="border-y border-stone-300 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
                  Hazard Development
                </p>

                <h2 className="mt-3 text-3xl font-black text-zinc-950 sm:text-4xl">
                  Common Causes
                </h2>

                <p className="mt-5 leading-7 text-zinc-600">
                  Review the conditions and failures that may contribute
                  to this hazard. Actual causes must be verified through
                  site inspection and activity-specific risk assessment.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {hazard.commonCauses.map((cause, index) => (
                  <div
                    key={cause}
                    className="flex items-start gap-4 border border-stone-300 bg-stone-50 p-5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-zinc-950 text-xs font-black text-yellow-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="pt-1 text-sm font-bold leading-6 text-zinc-800">
                      {cause}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-zinc-950">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400">
                Risk Control
              </p>

              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                Required Control Measures
              </h2>

              <p className="mt-5 leading-7 text-zinc-400">
                Control measures should be selected and implemented
                according to the activity, risk level, approved work
                method, applicable requirements, and actual site
                conditions.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {hazard.controls.map((control, index) => (
                <div
                  key={control}
                  className="border border-zinc-800 bg-zinc-900 p-5"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-yellow-400 text-sm font-black text-zinc-950">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="pt-1 text-sm font-bold leading-7 text-zinc-200">
                      {control}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-stone-300 bg-stone-100">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
                  Field Verification
                </p>

                <h2 className="mt-3 text-3xl font-black text-zinc-950 sm:text-4xl">
                  Inspection Checklist
                </h2>

                <p className="mt-5 leading-7 text-zinc-600">
                  Use these points as a preliminary field reference.
                  Additional inspection requirements may apply depending
                  on the project, equipment, legal requirements, and
                  approved safety procedures.
                </p>

                <div className="mt-7 border-l-4 border-yellow-400 bg-white p-5">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-600">
                    Inspection Tip
                  </p>

                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    Verify actual site conditions. Do not rely only on
                    documents, permits, or verbal confirmation when a
                    physical inspection is required.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden border border-stone-300 bg-white shadow-sm">
                {hazard.inspectionPoints.map((point, index) => (
                  <div
                    key={point}
                    className="flex items-start gap-4 border-b border-stone-200 p-5 last:border-b-0"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center border-2 border-zinc-950 text-xs font-black text-zinc-950">
                      {index + 1}
                    </span>

                    <p className="pt-1 text-sm font-bold leading-6 text-zinc-800">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-stone-300 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="overflow-hidden border border-stone-300 bg-stone-50">
                <div className="border-b border-stone-300 bg-zinc-950 px-6 py-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-400">
                    Unsafe Observation Example
                  </p>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="text-base leading-8 text-zinc-700">
                    “{hazard.observationExample}”
                  </p>
                </div>
              </div>

              <div className="overflow-hidden border border-yellow-500 bg-yellow-50">
                <div className="border-b border-yellow-500 bg-yellow-400 px-6 py-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-950">
                    Recommended Corrective Action
                  </p>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="text-base font-bold leading-8 text-zinc-800">
                    {hazard.recommendedAction}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {relatedHazards.length > 0 && (
          <section className="border-b border-stone-300 bg-stone-100">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
                  Continue Exploring
                </p>

                <h2 className="mt-3 text-3xl font-black text-zinc-950">
                  Related Safety Hazards
                </h2>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {relatedHazards.map((relatedHazard) => (
                  <Link
                    key={`${relatedHazard.areaSlug}-${relatedHazard.hazardSlug}`}
                    href={`/safety/${relatedHazard.sectorSlug}/${relatedHazard.areaSlug}/${relatedHazard.hazardSlug}`}
                    className="group border border-stone-300 bg-white p-5 transition hover:-translate-y-1 hover:border-yellow-500 hover:shadow-lg"
                  >
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-600">
                      {relatedHazard.areaTitle}
                    </p>

                    <h3 className="mt-3 text-lg font-black text-zinc-950">
                      {relatedHazard.hazardTitle}
                    </h3>

                    <p className="mt-5 text-sm font-black text-zinc-500 transition group-hover:text-zinc-950">
                      View Hazard Guidance →
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="border-l-4 border-yellow-400 bg-yellow-50 p-6">
            <p className="text-sm leading-7 text-zinc-800">
              <strong className="text-zinc-950">
                Safety Information Note:
              </strong>{" "}
              This hazard guidance is intended for practical learning and
              preliminary safety reference. It is not a substitute for
              site-specific risk assessment, approved method statements,
              permit-to-work requirements, lifting plans, isolation
              procedures, competent-person review, manufacturer
              instructions, emergency planning, or applicable legal and
              project requirements.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/safety/${hazard.sectorSlug}`}
              className="inline-flex items-center justify-center bg-zinc-950 px-5 py-3 text-sm font-black text-yellow-400 transition hover:bg-zinc-800"
            >
              ← Back to {hazard.sectorTitle}
            </Link>

            <Link
              href="/safety"
              className="inline-flex items-center justify-center border border-stone-300 bg-white px-5 py-3 text-sm font-black text-zinc-800 transition hover:border-yellow-500"
            >
              View All Safety Sectors
            </Link>
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

function ContentCard({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="overflow-hidden border border-stone-300 bg-white shadow-sm">
      <div className="h-1 bg-yellow-400" />

      <div className="p-6 sm:p-8">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-600">
          {eyebrow}
        </p>

        <h2 className="mt-3 text-2xl font-black text-zinc-950">
          {title}
        </h2>

        <div className="mt-6">{children}</div>
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
          className="flex items-start gap-4 border border-stone-200 bg-stone-50 p-4"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-zinc-950 text-xs font-black text-yellow-400">
            {String(index + 1).padStart(2, "0")}
          </span>

          <p className="pt-1 text-sm font-bold leading-6 text-zinc-800">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}

function TagGrid({
  items,
}: {
  items: string[];
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item}
          className="border-l-4 border-yellow-400 bg-stone-100 p-4"
        >
          <p className="text-sm font-black leading-6 text-zinc-800">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}