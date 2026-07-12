"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  {
    name: "Home",
    href: "/",
    live: true,
  },
  {
    name: "Calculators",
    href: "/calculators",
    live: true,
  },
  {
    name: "Safety",
    href: "#",
    live: false,
  },
  {
    name: "Templates",
    href: "#",
    live: false,
  },
  {
    name: "Blog",
    href: "#",
    live: false,
  },
];

export default function Header() {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  function isActiveRoute(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950 text-white shadow-lg">
      <div className="h-1 bg-yellow-400" />

      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="group flex items-center gap-3"
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

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => {
            const active =
              item.live && isActiveRoute(item.href);

            if (!item.live) {
              return (
                <span
                  key={item.name}
                  title="Coming Soon"
                  className="cursor-not-allowed px-4 py-3 text-sm font-bold text-zinc-600"
                >
                  {item.name}
                </span>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-3 text-sm font-bold transition ${
                  active
                    ? "text-yellow-400"
                    : "text-zinc-300 hover:text-yellow-400"
                }`}
              >
                {item.name}

                {active && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-yellow-400" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/calculators"
            className="inline-flex items-center justify-center bg-yellow-400 px-5 py-3 text-sm font-black text-zinc-950 transition hover:bg-yellow-300"
          >
            Explore Tools
          </Link>
        </div>

        <button
          type="button"
          onClick={() =>
            setMobileMenuOpen((current) => !current)
          }
          className="flex h-11 w-11 items-center justify-center border border-zinc-700 bg-zinc-900 text-yellow-400 transition hover:border-yellow-400 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="sr-only">
            Toggle navigation
          </span>

          {mobileMenuOpen ? (
            <span className="text-2xl font-light">
              ×
            </span>
          ) : (
            <span className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 bg-current" />
              <span className="h-0.5 w-5 bg-current" />
              <span className="h-0.5 w-5 bg-current" />
            </span>
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-zinc-800 bg-zinc-950 lg:hidden">
          <nav
            className="mx-auto max-w-7xl px-4 py-5 sm:px-6"
            aria-label="Mobile navigation"
          >
            <div className="space-y-1">
              {navigation.map((item) => {
                const active =
                  item.live &&
                  isActiveRoute(item.href);

                if (!item.live) {
                  return (
                    <div
                      key={item.name}
                      className="flex items-center justify-between px-4 py-3"
                    >
                      <span className="text-sm font-bold text-zinc-600">
                        {item.name}
                      </span>

                      <span className="border border-zinc-800 px-2 py-1 text-[9px] font-black uppercase tracking-wider text-zinc-600">
                        Soon
                      </span>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() =>
                      setMobileMenuOpen(false)
                    }
                    className={`flex items-center justify-between px-4 py-3 text-sm font-bold transition ${
                      active
                        ? "bg-yellow-400 text-zinc-950"
                        : "text-zinc-300 hover:bg-zinc-900 hover:text-yellow-400"
                    }`}
                  >
                    <span>{item.name}</span>

                    <span>→</span>
                  </Link>
                );
              })}
            </div>

            <Link
              href="/calculators"
              onClick={() =>
                setMobileMenuOpen(false)
              }
              className="mt-5 flex w-full items-center justify-center bg-yellow-400 px-5 py-4 text-sm font-black text-zinc-950 transition hover:bg-yellow-300"
            >
              Explore Construction Tools
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}