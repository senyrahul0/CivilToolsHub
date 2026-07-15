import Link from "next/link";

import PopularTools from "@/components/home/PopularTools";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="w-full overflow-x-hidden bg-zinc-950">
        <section className="relative w-full overflow-hidden border-b border-zinc-800 bg-zinc-950">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.12),transparent_35%)]" />

          <div className="pointer-events-none absolute -left-32 top-24 h-64 w-64 rounded-full bg-yellow-400/5 blur-3xl sm:-left-24 sm:top-32 sm:h-72 sm:w-72" />

          <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-7xl flex-col items-center justify-center px-3 py-14 text-center min-[360px]:px-4 sm:min-h-[650px] sm:px-6 sm:py-20 lg:px-8">
            <div className="mb-5 inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-2 sm:mb-6 sm:px-4">
              <span className="h-2 w-2 shrink-0 rounded-full bg-yellow-400" />

              <p className="text-[10px] font-bold uppercase leading-5 tracking-[0.12em] text-yellow-400 min-[360px]:text-[11px] sm:text-sm sm:tracking-[0.2em]">
                Built for Construction Professionals
              </p>
            </div>

            <h1 className="max-w-5xl text-[2rem] font-black leading-[1.08] tracking-tight text-white min-[360px]:text-4xl sm:text-5xl sm:leading-[1.08] lg:text-7xl">
              Construction Engineering Tools for{" "}
              <span className="text-yellow-400">
                Smarter Site Work
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:mt-7 sm:text-lg sm:leading-8">
              Access practical civil engineering calculators,
              construction safety tools, engineering templates, and
              technical resources in one place.
            </p>

            <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:w-auto sm:max-w-none sm:flex-row sm:gap-4">
              <Link
                href="/calculators"
                className="flex min-h-12 w-full items-center justify-center rounded-lg bg-yellow-400 px-5 py-3.5 text-center text-sm font-bold text-zinc-950 shadow-lg shadow-yellow-400/10 transition hover:bg-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:w-auto sm:px-7"
              >
                Explore Calculators
              </Link>

              <Link
                href="/safety"
                className="flex min-h-12 w-full items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900 px-5 py-3.5 text-center text-sm font-bold text-white transition hover:border-yellow-400 hover:text-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:w-auto sm:px-7"
              >
                Explore Safety Tools
              </Link>
            </div>

            <div className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-xl border border-zinc-800 bg-zinc-800 min-[420px]:grid-cols-3 sm:mt-16">
              <div className="flex min-h-24 flex-col items-center justify-center bg-zinc-900 px-4 py-5 sm:px-6">
                <p className="text-xl font-black text-yellow-400 sm:text-2xl">
                  Engineering
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-wider text-zinc-500 sm:text-xs">
                  Practical Tools
                </p>
              </div>

              <div className="flex min-h-24 flex-col items-center justify-center bg-zinc-900 px-4 py-5 sm:px-6">
                <p className="text-xl font-black text-yellow-400 sm:text-2xl">
                  Construction
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-wider text-zinc-500 sm:text-xs">
                  Site Focused
                </p>
              </div>

              <div className="flex min-h-24 flex-col items-center justify-center bg-zinc-900 px-4 py-5 sm:px-6">
                <p className="text-xl font-black text-yellow-400 sm:text-2xl">
                  Safety
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-wider text-zinc-500 sm:text-xs">
                  Professional Resources
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full bg-stone-100">
          <PopularTools />
        </div>
      </main>

      <Footer />
    </>
  );
}