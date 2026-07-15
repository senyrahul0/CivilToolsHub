"use client";

import { usePathname, useRouter } from "next/navigation";

function getBackPath(pathname: string) {
  const segments = pathname
    .split("/")
    .filter(Boolean);

  if (segments.length <= 1) {
    return "/";
  }

  return `/${segments.slice(0, -1).join("/")}`;
}

function getBackLabel(pathname: string) {
  const segments = pathname
    .split("/")
    .filter(Boolean);

  if (segments.length <= 1) {
    return "Back to Home";
  }

  if (
    pathname.startsWith("/safety/") &&
    segments.length >= 4
  ) {
    return "Back to Safety Section";
  }

  if (
    pathname.startsWith("/safety/") &&
    segments.length >= 2
  ) {
    return "Back to Safety";
  }

  if (pathname.startsWith("/calculators/")) {
    return "Back to Calculators";
  }

  return "Back";
}

export default function GlobalBackButton() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/") {
    return null;
  }

  const backPath = getBackPath(pathname);
  const backLabel = getBackLabel(pathname);

  function handleBack() {
    router.push(backPath);
  }

  return (
    <div className="w-full border-b border-zinc-800 bg-zinc-950">
      <div className="mx-auto flex w-full max-w-7xl items-center px-3 py-2.5 sm:px-6 sm:py-3 lg:px-8">
        <button
          type="button"
          onClick={handleBack}
          className="group inline-flex min-h-11 max-w-full cursor-pointer items-center gap-2 border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm font-black text-zinc-300 transition hover:border-yellow-400 hover:text-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 sm:gap-3 sm:px-4 sm:py-2.5"
          aria-label={backLabel}
        >
          <span
            className="shrink-0 text-lg leading-none transition-transform group-hover:-translate-x-1"
            aria-hidden="true"
          >
            ←
          </span>

          <span className="min-w-0 truncate">
            {backLabel}
          </span>
        </button>
      </div>
    </div>
  );
}