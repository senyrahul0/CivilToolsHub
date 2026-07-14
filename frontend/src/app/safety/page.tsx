import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Construction Safety Library",
  description:
    "Explore construction, infrastructure, industrial, energy, oil and gas, marine, mining, and project safety sectors with practical hazard and control guidance.",
  keywords: [
    "Construction Safety",
    "Safety Hazard Library",
    "High Rise Building Safety",
    "Bridge Safety",
    "Highway Safety",
    "Metro Safety",
    "Tunnel Safety",
    "Industrial Safety",
    "Power Plant Safety",
    "Oil and Gas Safety",
    "Marine Safety",
    "Mining Safety",
    "Civil Engineering Safety",
  ],
};

const safetySectors = [
  {
    number: "01",
    title: "High-Rise Building Safety",
    slug: "high-rise-building",
    shortName: "High-Rise",
    description:
      "Safety guidance for towers, skyscrapers, residential buildings, commercial buildings, and vertical construction projects.",
    projects:
      "Towers, skyscrapers, residential & commercial buildings",
    areas: [
      "Work at Height",
      "Scaffolding",
      "Floor Openings",
      "Formwork & Mivan",
      "Lifting Operations",
      "Electrical Safety",
      "Material Handling",
      "Fire & Hot Work",
      "Plant & Machinery",
      "Safety Management",
    ],
    type: "Detailed Library",
  },
  {
    number: "02",
    title: "Bridge & Flyover Safety",
    slug: "bridge-flyover",
    shortName: "Bridge",
    description:
      "Safety topics for bridge erection, flyover construction, viaduct works, elevated corridors, and heavy lifting operations.",
    projects:
      "Bridges, flyovers, viaducts & elevated corridors",
    areas: [
      "Girder Lifting",
      "Launching Operations",
      "Pier Works",
      "Deck Works",
      "Crane Safety",
      "Work at Height",
      "Temporary Works",
      "Traffic Interface",
      "Formwork",
      "Emergency Planning",
    ],
    type: "Sector Library",
  },
  {
    number: "03",
    title: "Road & Highway Safety",
    slug: "road-highway",
    shortName: "Road",
    description:
      "Practical safety guidance for highways, expressways, road construction, interchanges, and live traffic work zones.",
    projects:
      "Highways, expressways, road construction & interchanges",
    areas: [
      "Traffic Management",
      "Work Zone Safety",
      "Barricading",
      "Earthmoving",
      "Paving Operations",
      "Night Work",
      "Plant Movement",
      "Excavation",
      "Public Interface",
      "Emergency Response",
    ],
    type: "Sector Library",
  },
  {
    number: "04",
    title: "Metro & Railway Safety",
    slug: "metro-railway",
    shortName: "Metro & Rail",
    description:
      "Safety topics for metro rail, railway construction, stations, depots, track works, and elevated rail projects.",
    projects:
      "Metro rail, railway, stations, depots & elevated rail",
    areas: [
      "Track Work",
      "Station Construction",
      "Depot Safety",
      "Lifting Operations",
      "Electrical Interface",
      "Work at Height",
      "Public Interface",
      "Plant Movement",
      "Permit Systems",
      "Emergency Planning",
    ],
    type: "Sector Library",
  },
  {
    number: "05",
    title: "Tunnel & Underground Safety",
    slug: "tunnel-underground",
    shortName: "Tunnel",
    description:
      "Safety guidance for tunnels, underground metro works, shafts, confined spaces, and tunnel boring operations.",
    projects:
      "Tunnels, underground metro, shafts & TBM works",
    areas: [
      "TBM Operations",
      "Shaft Safety",
      "Confined Space",
      "Ventilation",
      "Ground Support",
      "Underground Lifting",
      "Fire Safety",
      "Gas Monitoring",
      "Emergency Escape",
      "Water Ingress",
    ],
    type: "Sector Library",
  },
  {
    number: "06",
    title: "Industrial & Manufacturing Safety",
    slug: "industrial-manufacturing",
    shortName: "Industrial",
    description:
      "Safety knowledge for factories, manufacturing facilities, steel plants, cement plants, and industrial operations.",
    projects:
      "Factories, manufacturing, steel & cement plants",
    areas: [
      "Machine Safety",
      "LOTO",
      "Material Handling",
      "Conveyor Safety",
      "Pressure Systems",
      "Chemical Safety",
      "Hot Work",
      "Electrical Safety",
      "Industrial Hygiene",
      "Emergency Response",
    ],
    type: "Sector Library",
  },
  {
    number: "07",
    title: "Power & Energy Safety",
    slug: "power-energy",
    shortName: "Power & Energy",
    description:
      "Safety topics for power plants, substations, transmission projects, solar, wind, and other energy infrastructure.",
    projects:
      "Power plants, substations, transmission & renewable energy",
    areas: [
      "Electrical Safety",
      "High Voltage",
      "Substation Safety",
      "Transmission Work",
      "Arc Flash",
      "LOTO",
      "Work at Height",
      "Lifting Operations",
      "Battery Safety",
      "Emergency Response",
    ],
    type: "Sector Library",
  },
  {
    number: "08",
    title: "Oil, Gas & Petrochemical Safety",
    slug: "oil-gas-petrochemical",
    shortName: "Oil & Gas",
    description:
      "Safety guidance for refineries, pipelines, terminals, petrochemical facilities, and process industry operations.",
    projects:
      "Refineries, pipelines, terminals & petrochemical plants",
    areas: [
      "Process Safety",
      "Gas Testing",
      "Confined Space",
      "Hot Work",
      "Pipeline Safety",
      "Pressure Systems",
      "Chemical Exposure",
      "Permit to Work",
      "Fire & Explosion",
      "Emergency Response",
    ],
    type: "Sector Library",
  },
  {
    number: "09",
    title: "Marine, Port & Offshore Safety",
    slug: "marine-port-offshore",
    shortName: "Marine",
    description:
      "Safety topics for ports, harbours, jetties, shipyards, marine construction, and offshore work environments.",
    projects:
      "Ports, harbours, jetties, shipyards & offshore projects",
    areas: [
      "Marine Operations",
      "Working Over Water",
      "Lifting Operations",
      "Mooring Safety",
      "Diving Interface",
      "Jetty Works",
      "Shipyard Safety",
      "Weather Exposure",
      "Rescue Planning",
      "Emergency Response",
    ],
    type: "Sector Library",
  },
  {
    number: "10",
    title: "Mining & Heavy Infrastructure Safety",
    slug: "mining-heavy-infrastructure",
    shortName: "Mining & Heavy Civil",
    description:
      "Safety knowledge for mines, quarrying, dams, large earthworks, and major heavy civil infrastructure projects.",
    projects:
      "Mines, quarrying, dams & major heavy civil works",
    areas: [
      "Mining Operations",
      "Blasting Interface",
      "Heavy Equipment",
      "Slope Safety",
      "Haul Roads",
      "Quarry Safety",
      "Dam Construction",
      "Excavation",
      "Ground Stability",
      "Emergency Response",
    ],
    type: "Sector Library",
  },
];

export default function SafetyPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-stone-100">
        <section className="border-b border-zinc-800 bg-zinc-950">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-5xl">
              <div className="flex items-center gap-3">
                <span className="h-1 w-12 bg-yellow-400" />

                <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-400">
                  CivilToolsHub Safety Knowledge System
                </p>
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Construction & Industrial{" "}
                <span className="text-yellow-400">
                  Safety Library
                </span>
              </h1>

              <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-400">
                Explore practical safety knowledge by project sector,
                work area, activity, hazard, control measure, inspection
                point, and reporting requirement.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <HeroTag>10 Safety Sectors</HeroTag>
                <HeroTag>100 Core Safety Areas</HeroTag>
                <HeroTag>Hazard Guidance</HeroTag>
                <HeroTag>Inspection Points</HeroTag>
                <HeroTag>Practical Controls</HeroTag>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-stone-300 bg-yellow-400">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6 lg:px-8">
            <Stat
              value="10"
              label="Major Safety Sectors"
            />

            <Stat
              value="100"
              label="Core Safety Areas"
            />

            <Stat
              value="10"
              label="Sector Libraries Live"
            />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
              Safety Sectors
            </p>

            <h2 className="mt-3 text-3xl font-black text-zinc-950 sm:text-4xl">
              Select Your Project or Work Sector
            </h2>

            <p className="mt-4 leading-7 text-zinc-600">
              Start with the sector that matches your project. Select a
              sector to explore its core safety areas, common work
              activities, and hazard topics.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {safetySectors.map((sector) => (
              <Link
                key={sector.slug}
                href={`/safety/${sector.slug}`}
                className="group block h-full"
              >
                <article className="relative h-full overflow-hidden border border-stone-300 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-500 hover:shadow-xl">
                  <div className="h-1 bg-yellow-400" />

                  <div className="p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-zinc-950 text-lg font-black text-yellow-400">
                        {sector.number}
                      </span>

                      <span className="bg-yellow-400 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-zinc-950">
                        Library Live
                      </span>
                    </div>

                    <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-yellow-600">
                      {sector.shortName} Safety
                    </p>

                    <h2 className="mt-3 text-2xl font-black text-zinc-950">
                      {sector.title}
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-zinc-600">
                      {sector.description}
                    </p>

                    <div className="mt-5 border-l-4 border-yellow-400 bg-stone-100 p-4">
                      <p className="text-[11px] font-black uppercase tracking-wider text-zinc-500">
                        Main Projects
                      </p>

                      <p className="mt-2 text-sm font-bold leading-6 text-zinc-800">
                        {sector.projects}
                      </p>
                    </div>

                    <div className="mt-6">
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-zinc-500">
                          Core Safety Areas
                        </p>

                        <span className="text-xs font-black text-zinc-400">
                          {sector.areas.length} Areas
                        </span>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {sector.areas.map((area) => (
                          <span
                            key={area}
                            className="border border-stone-300 bg-white px-3 py-2 text-xs font-bold text-zinc-700"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-7 border-t border-stone-200 pt-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-black text-zinc-950">
                            Explore Safety Library
                          </p>

                          <p className="mt-1 text-xs font-bold text-zinc-500">
                            {sector.type}
                          </p>
                        </div>

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
        </section>

        <section className="border-y border-zinc-800 bg-zinc-950">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400">
                  Safety Knowledge Architecture
                </p>

                <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
                  From Project Sector to Practical Safety Action
                </h2>

                <p className="mt-5 leading-7 text-zinc-400">
                  CivilToolsHub is designed to organize safety knowledge
                  from the project sector down to work areas, activities,
                  hazards, control measures, and practical inspection
                  guidance.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-5">
                <FlowStep
                  number="01"
                  title="Sector"
                />

                <FlowStep
                  number="02"
                  title="Work Area"
                />

                <FlowStep
                  number="03"
                  title="Activity"
                />

                <FlowStep
                  number="04"
                  title="Hazard"
                />

                <FlowStep
                  number="05"
                  title="Control"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="overflow-hidden border border-stone-300 bg-white shadow-sm">
            <div className="h-1 bg-yellow-400" />

            <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-2">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
                  Safety Topic Structure
                </p>

                <h2 className="mt-4 text-3xl font-black text-zinc-950">
                  What You Will Find Inside a Safety Topic
                </h2>

                <p className="mt-5 leading-7 text-zinc-600">
                  Safety topics are structured as practical reference
                  pages rather than short generic definitions.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <TopicItem>Hazard Description</TopicItem>
                <TopicItem>What Can Happen</TopicItem>
                <TopicItem>Possible Consequences</TopicItem>
                <TopicItem>Inspection Points</TopicItem>
                <TopicItem>Required Controls</TopicItem>
                <TopicItem>Observation Example</TopicItem>
                <TopicItem>Recommended Action</TopicItem>
                <TopicItem>Related Safety Topics</TopicItem>
              </div>
            </div>
          </div>

          <div className="mt-8 border-l-4 border-yellow-400 bg-yellow-50 p-6">
            <p className="text-sm leading-7 text-zinc-800">
              <strong className="text-zinc-950">
                Safety Information Note:
              </strong>{" "}
              CivilToolsHub safety content is intended for practical
              learning and preliminary safety reference. Project
              requirements must be verified against applicable laws,
              regulations, approved risk assessments, method statements,
              permit systems, manufacturer instructions, client
              requirements, and site-specific conditions.
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

function TopicItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 border border-stone-300 bg-stone-50 p-4">
      <span className="h-3 w-3 shrink-0 bg-yellow-400" />

      <span className="text-sm font-bold text-zinc-800">
        {children}
      </span>
    </div>
  );
}