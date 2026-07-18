import type { Metadata } from "next";

import ObservationGenerator from "@/components/observation-generator/ObservationGenerator";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Construction Safety Observation Generator",
  description:
    "Generate professional construction safety observations for high-rise buildings, bridges, roads, metro, industrial projects and more.",
};

export default function SafetyObservationGeneratorPage() {
  return (
    <>
      <Header />

      <main className="bg-zinc-950 text-white">
        <section className="border-b border-zinc-800">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400">
                CivilToolsHub
              </p>

              <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                Construction Safety
                <span className="block text-yellow-400">
                  Observation Generator
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
                Generate professional safety observations, identify risks,
                recommend corrective actions, and create site-ready reports
                for construction projects.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <ObservationGenerator />
        </section>
      </main>

      <Footer />
    </>
  );
}