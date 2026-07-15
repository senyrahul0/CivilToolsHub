"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  {
    name: "Home",
    href: "/",
    live: true,
  },
  {
    name: "About",
    href: "/about",
    live: true,
  },
  {
    name: "Calculators",
    href: "/calculators",
    live: true,
  },
  {
    name: "Safety",
    href: "/safety",
    live: true,
  },
  {
    name: "Templates",
    href: "/templates",
    live: false,
  },
  {
    name: "Blog",
    href: "/blog",
    live: false,
  },
];

export default function Header() {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [mobileMenuOpen]);

  function isActiveRoute(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950 text-white shadow-lg">
      <div className="h-1 w-full bg-yellow-400" />

      <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-3 px-3 sm:min-h-20 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="group flex min-w-0 cursor-pointer items-center gap-2 sm:gap-3"
          aria-label="CivilToolsHub home"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-yellow-400 text-base font-black text-zinc-950 transition group-hover:bg-yellow-300 sm:h-11 sm:w-11 sm:text-lg">
            CT
          </span>

          <div className="min-w-0">
            <p className="whitespace-nowrap text-lg font-black tracking-tight text-white sm:text-xl">
              CivilTools
              <span className="text-yellow-400">
                Hub
              </span>
            </p>

            <p className="hidden text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500 min-[360px]:block">
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
                <div
                  key={item.name}
                  className="group relative"
                >
                  <span
                    className="relative block cursor-default px-3 py-3 text-sm font-bold text-zinc-500 transition hover:text-yellow-400 xl:px-4"
                    aria-disabled="true"
                  >
                    {item.name}

                    <span className="absolute bottom-0 left-3 right-3 h-0.5 origin-left scale-x-0 bg-yellow-400 transition-transform duration-200 group-hover:scale-x-100 xl:left-4 xl:right-4" />
                  </span>

                  <div className="pointer-events-none absolute left-1/2 top-full z-50 hidden -translate-x-1/2 pt-2 group-hover:block">
                    <div className="whitespace-nowrap border border-zinc-700 bg-zinc-900 px-3 py-2 text-[10px] font-black uppercase tracking-[0.12em] text-yellow-400 shadow-xl">
                      Coming Soon
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group relative cursor-pointer px-3 py-3 text-sm font-bold transition xl:px-4 ${
                  active
                    ? "text-yellow-400"
                    : "text-zinc-300 hover:text-yellow-400"
                }`}
              >
                {item.name}

                <span
                  className={`absolute bottom-0 left-3 right-3 h-0.5 origin-left bg-yellow-400 transition-transform duration-200 xl:left-4 xl:right-4 ${
                    active
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/calculators"
            className="inline-flex cursor-pointer items-center justify-center whitespace-nowrap bg-yellow-400 px-4 py-3 text-sm font-black text-zinc-950 transition hover:bg-yellow-300 xl:px-5"
          >
            Explore Tools
          </Link>
        </div>

        <button
          type="button"
          onClick={() =>
            setMobileMenuOpen((current) => !current)
          }
          className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center border border-zinc-700 bg-zinc-900 text-yellow-400 transition hover:border-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 lg:hidden"
          aria-label={
            mobileMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="sr-only">
            {mobileMenuOpen
              ? "Close navigation"
              : "Open navigation"}
          </span>

          {mobileMenuOpen ? (
            <span
              className="text-3xl font-light leading-none"
              aria-hidden="true"
            >
              ×
            </span>
          ) : (
            <span
              className="flex flex-col gap-1.5"
              aria-hidden="true"
            >
              <span className="h-0.5 w-5 bg-current" />
              <span className="h-0.5 w-5 bg-current" />
              <span className="h-0.5 w-5 bg-current" />
            </span>
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-zinc-800 bg-zinc-950 lg:hidden"
        >
          <nav
            className="mx-auto max-h-[calc(100dvh-4.25rem)] w-full max-w-7xl overflow-y-auto px-3 py-4 sm:px-6 sm:py-5"
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
                      className="flex min-h-12 items-center justify-between gap-4 px-4 py-3"
                    >
                      <span className="text-sm font-bold text-zinc-500">
                        {item.name}
                      </span>

                      <span className="shrink-0 border border-zinc-700 px-2 py-1 text-[9px] font-black uppercase tracking-wider text-yellow-400">
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
                    className={`flex min-h-12 cursor-pointer items-center justify-between gap-4 px-4 py-3 text-sm font-bold transition ${
                      active
                        ? "bg-yellow-400 text-zinc-950"
                        : "text-zinc-300 hover:bg-zinc-900 hover:text-yellow-400"
                    }`}
                  >
                    <span>{item.name}</span>

                    <span
                      className="shrink-0 text-lg"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                );
              })}
            </div>

            <Link
              href="/calculators"
              onClick={() =>
                setMobileMenuOpen(false)
              }
              className="mt-5 flex min-h-12 w-full cursor-pointer items-center justify-center bg-yellow-400 px-4 py-4 text-center text-sm font-black text-zinc-950 transition hover:bg-yellow-300 sm:px-5"
            >
              Explore Construction Tools
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}