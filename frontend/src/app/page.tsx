import Link from "next/link";

import PopularTools from "@/components/home/PopularTools";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-zinc-950">
        <section className="relative overflow-hidden border-b border-zinc-800 bg-zinc-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.12),transparent_35%)]" />

          <div className="absolute -left-24 top-32 h-72 w-72 rounded-full bg-yellow-400/5 blur-3xl" />

          <div className="relative mx-auto flex min-h-[650px] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400 sm:text-sm">
                Built for Construction Professionals
              </p>
            </div>

            <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
              Construction Engineering Tools for{" "}
              <span className="text-yellow-400">
                Smarter Site Work
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
              Access practical civil engineering calculators, construction
              safety tools, engineering templates, and technical resources in
              one place.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/calculators"
                className="rounded-lg bg-yellow-400 px-7 py-3.5 text-sm font-bold text-zinc-950 shadow-lg shadow-yellow-400/10 transition hover:bg-yellow-300"
              >
                Explore Calculators
              </Link>

              <Link
                href="/safety"
                className="rounded-lg border border-zinc-700 bg-zinc-900 px-7 py-3.5 text-sm font-bold text-white transition hover:border-yellow-400 hover:text-yellow-400"
              >
                Explore Safety Tools
              </Link>
            </div>

            <div className="mt-16 grid w-full max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-xl border border-zinc-800 bg-zinc-800 sm:grid-cols-3">
              <div className="bg-zinc-900 px-6 py-5">
                <p className="text-2xl font-black text-yellow-400">
                  Engineering
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
                  Practical Tools
                </p>
              </div>

              <div className="bg-zinc-900 px-6 py-5">
                <p className="text-2xl font-black text-yellow-400">
                  Construction
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
                  Site Focused
                </p>
              </div>

              <div className="bg-zinc-900 px-6 py-5">
                <p className="text-2xl font-black text-yellow-400">
                  Safety
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
                  Professional Resources
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-stone-100">
          <PopularTools />
        </div>
      </main>

      <Footer />
    </>
  );
}